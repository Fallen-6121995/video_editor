import { useEffect, useState } from "react";
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
const FF = createFFmpeg({
  log: true,
  corePath:
    "https://cdnjs.cloudflare.com/ajax/libs/ffmpeg-core/0.11.0/ffmpeg-core.js",
});
import * as helpers from "../utils/helpers";
import VideoFilePicker from "../components/VideoFilePicker";
import OutputVideo from "../components/OutputVideo";
import RangeInput from "../components/RangeInput";
import InputFileUrl from "../components/InputFileUrl";
import Sidebar from "../components/Sidebar";

(async function () {
  await FF.load();
})();

export default function Home() {
  const [ready, setReady] = useState(false);
  const [inputVideoFile, setInputVideoFile] = useState(null);
  const [vidUrl, setVidUrl] = useState(null);
  const [trimmedVideoFile, setTrimmedVideoFile] = useState(null);
  const [trimIsProcessing, setTrimIsProcessing] = useState(false);
  const [videoMeta, setVideoMeta] = useState(null);
  const [URL, setURL] = useState(null);
  const [rStart, setRstart] = useState(0); // 0%
  const [rEnd, setRend] = useState(10); // 10%
  const [thumbnails, setThumbnails] = useState([]);
  const [thumbnailIsProcessing, setThumbnailIsProcessing] = useState(false);

  const handleChange = async (e) => {
    let file = e.target.files[0];
    setInputVideoFile(file);
    setURL(await helpers.readFileAsBase64(file));
  };

  const handleInputData = (e) => {
    const el = e.target;
    setVidUrl(el.value);
    // console.log(e.target.value);
  };

  const handleUpdateRange = (func) => {
    console.log("val...<>", func);
    return ({ target: { value } }) => {
      console.log("value<>><<..", value);
      func(value);
    };
  };

  const getThumbnails = async ({ duration }) => {
    if (!FF.isLoaded()) await FF.load();
    setThumbnailIsProcessing(true);
    let MAX_NUMBER_OF_IMAGES = 15;
    let offset =
      duration === MAX_NUMBER_OF_IMAGES ? 1 : duration / MAX_NUMBER_OF_IMAGES;
    let NUMBER_OF_IMAGES = duration < MAX_NUMBER_OF_IMAGES ? duration : 15;
    FF.FS("writeFile", inputVideoFile.name, await fetchFile(inputVideoFile));
    const arrayOfImageURIs = [];
    for (let i = 0; i < NUMBER_OF_IMAGES; i++) {
      let startTimeInSecs = helpers.toTimeString(Math.round(i * offset));
      if (startTimeInSecs + offset > duration && offset > 1) {
        offset = 0;
      }
      try {
        await FF.run(
          "-ss",
          startTimeInSecs,
          "-i",
          inputVideoFile.name,
          "-t",
          "00:00:1.000",
          "-vf",
          `scale=150:-1`,
          `img${i}.png`
        );
        const data = FF.FS("readFile", `img${i}.png`);
        let blob = new Blob([data.buffer], { type: "image/png" });
        let dataURI = await helpers.readFileAsBase64(blob);
        arrayOfImageURIs.push(dataURI);
        FF.FS("unlink", `img${i}.png`);
      } catch (error) {
        console.log({ message: error });
      }
    }
    setThumbnailIsProcessing(false);
    return arrayOfImageURIs;
  };

  const handleLoadedData = async (e) => {
    const el = e.target;
    const meta = {
      name: inputVideoFile.name,
      duration: el.duration,
      videoWidth: el.videoWidth,
      videoHeight: el.videoHeight,
    };
    console.log({ meta });
    setVideoMeta(meta);
    const thumbnails = await getThumbnails(meta);
    setThumbnails(thumbnails);
  };

  const handleTrim = async () => {
    setTrimIsProcessing(true);
    let startTime = ((rStart / 100) * videoMeta.duration).toFixed(2);
    let offset = ((rEnd / 100) * videoMeta.duration - startTime).toFixed(2);
    try {
      FF.FS("writeFile", inputVideoFile.name, await fetchFile(inputVideoFile));
      await FF.run(
        "-ss",
        helpers.toTimeString(startTime),
        "-i",
        inputVideoFile.name,
        "-t",
        helpers.toTimeString(offset),
        "-c:v",
        "copy",
        "ping.mp4"
      );
      const data = FF.FS("readFile", "ping.mp4");
      console.log(data);
      const dataURL = await helpers.readFileAsBase64(
        new Blob([data.buffer], { type: "video/mp4" })
      );
      setTrimmedVideoFile(dataURL);
    } catch (error) {
      console.log(error);
    } finally {
      setTrimIsProcessing(false);
    }
  };

  return (
    <>
      <main className="App">
        <RangeInput
          rEnd={rEnd}
          rStart={rStart}
          handleUpdaterStart={handleUpdateRange(setRstart)}
          handleUpdaterEnd={handleUpdateRange(setRend)}
          loading={thumbnailIsProcessing}
          videoMeta={videoMeta}
          control={
            <div className="u-center">
              <button
                onClick={handleTrim}
                className="btn btn_b"
                disabled={trimIsProcessing}
              >
                {trimIsProcessing ? "trimming..." : "trim selected"}
              </button>
            </div>
          }
          thumbNails={thumbnails}
        />
        <section className="scrEditerMain">
          <Container fluid>
            <Row>
              <Col md={3} className="px-0">
                <Sidebar handleChange={handleChange} />
              </Col>
              <Col md={9} className="px-0">
                <div className="scrEditerRightArea">
                  <article className="grid_txt_2">
                    <VideoFilePicker
                      handleChange={handleChange}
                      showVideo={!!inputVideoFile}
                    >
                      <div className="bord_g_2 p_2">
                        <video
                          src={inputVideoFile ? URL : vidUrl}
                          autoPlay
                          controls
                          muted
                          onLoadedMetadata={handleLoadedData}
                          width="450"
                        ></video>
                      </div>
                    </VideoFilePicker>
                  </article>
                  <OutputVideo
                    videoSrc={trimmedVideoFile}
                    handleDownload={() => helpers.download(trimmedVideoFile)}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
}
export async function getServerSideProps(context) {
  // set HTTP header
  context.res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
  context.res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
  return {
    props: {},
  };
}
