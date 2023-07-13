import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import styles from "../styles/Sidebar.module.css";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";
function Sidebar({ handleChange }) {
  return (
    <div className={styles.scrSideBarBg}>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3} className="pe-0">
            <div className={styles.scrtabsBtnList}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="addMedia">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28.875"
                        height="22.831"
                        viewBox="0 0 28.875 22.831"
                      >
                        <g
                          id="Add_media"
                          data-name="Add media"
                          transform="translate(-2.75 -6.292)"
                        >
                          <path
                            id="Path_5824"
                            data-name="Path 5824"
                            d="M24.792,27.708a5.833,5.833,0,0,0,0-11.667h-.033q.032-.36.033-.729a8.021,8.021,0,1,0-16.042,0q0,.01,0,.021A6.251,6.251,0,0,0,10,27.708"
                            fill="none"
                            stroke="#b2b2b2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                          />
                          <path
                            id="Path_5825"
                            data-name="Path 5825"
                            d="M17.5,20.417v7.292m0,0,2.917-2.917M17.5,27.708l-2.917-2.917"
                            fill="none"
                            stroke="#b2b2b2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                          />
                        </g>
                      </svg>
                    </div>
                    <span>Add Media</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="introText">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Group_7774"
                        data-name="Group 7774"
                        width="30.781"
                        height="23.596"
                        viewBox="0 0 30.781 23.596"
                      >
                        <defs>
                          <clipPath id="clip-path">
                            <rect
                              id="Rectangle_3371"
                              data-name="Rectangle 3371"
                              width="30.781"
                              height="23.596"
                              fill="#b2b2b2"
                            />
                          </clipPath>
                        </defs>
                        <g
                          id="Group_7773"
                          data-name="Group 7773"
                          clip-path="url(#clip-path)"
                        >
                          <path
                            id="Path_5838"
                            data-name="Path 5838"
                            d="M29.318.068,1.47,0A1.467,1.467,0,0,0,0,1.468V20.55a7.762,7.762,0,0,0,.456,1.223,3.46,3.46,0,0,0,3.2,1.821q6.132.007,12.264,0H27.008a3.534,3.534,0,0,0,3.727-2.972.267.267,0,0,1,.046-.073V1.535A1.467,1.467,0,0,0,29.318.068m-.461,2.124q0,8.833,0,17.666a1.647,1.647,0,0,1-1.888,1.816c-7.687-.16-15.379-.359-23.059,0a1.665,1.665,0,0,1-1.986-1.806q0-8.833,0-17.666V1.85H28.857Z"
                            transform="translate(0 -0.001)"
                            fill="#b2b2b2"
                          />
                          <path
                            id="Path_5839"
                            data-name="Path 5839"
                            d="M174.564,70.706v1.937H179.6V83.585h1.966V72.641h5.357V70.706c-3.6,0-8.763,0-12.359,0"
                            transform="translate(-160.571 -65.037)"
                            fill="#b2b2b2"
                          />
                          <rect
                            id="Rectangle_3368"
                            data-name="Rectangle 3368"
                            width="7.685"
                            height="1.882"
                            transform="translate(4.329 5.677)"
                            fill="#b2b2b2"
                          />
                          <rect
                            id="Rectangle_3369"
                            data-name="Rectangle 3369"
                            width="7.685"
                            height="1.882"
                            transform="translate(4.329 10.823)"
                            fill="#b2b2b2"
                          />
                          <rect
                            id="Rectangle_3370"
                            data-name="Rectangle 3370"
                            width="7.685"
                            height="1.882"
                            transform="translate(4.329 15.954)"
                            fill="#b2b2b2"
                          />
                        </g>
                      </svg>
                    </div>
                    <span>Intro Text</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Cut">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24.378"
                        height="24"
                        viewBox="0 0 24.378 24"
                      >
                        <g
                          id="Group_4"
                          data-name="Group 4"
                          transform="translate(-37 -71)"
                        >
                          <circle
                            id="Ellipse_2"
                            data-name="Ellipse 2"
                            cx="3.438"
                            cy="3.438"
                            r="3.438"
                            transform="translate(38 72)"
                            fill="none"
                            stroke="#b2b2b2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                          />
                          <circle
                            id="Ellipse_3"
                            data-name="Ellipse 3"
                            cx="3.438"
                            cy="3.438"
                            r="3.438"
                            transform="translate(38 87.125)"
                            fill="none"
                            stroke="#b2b2b2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                          />
                          <path
                            id="Path_18"
                            data-name="Path 18"
                            d="M40.75,87.125,60,75.118"
                            fill="none"
                            stroke="#b2b2b2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                          />
                          <path
                            id="Path_19"
                            data-name="Path 19"
                            d="M49.96,83.442l-8.681-5.415a1,1,0,0,0-1.058,1.7l7.85,4.9Zm0,2.357,9.511,5.932a1,1,0,1,0,1.058-1.7L51.85,84.62Z"
                            fill="#b2b2b2"
                            fill-rule="evenodd"
                          />
                        </g>
                      </svg>
                    </div>
                    <span>Cut</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Crop">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25.333"
                        height="25.334"
                        viewBox="0 0 25.333 25.334"
                      >
                        <g
                          id="Group_1"
                          data-name="Group 1"
                          transform="translate(-2457.833 475.167)"
                        >
                          <path
                            id="Path_51"
                            data-name="Path 51"
                            d="M61.167,745.333h-15.5a2,2,0,0,1-2-2v-15.5"
                            transform="translate(2421 -1202)"
                            fill="none"
                            stroke="#b2b2b2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                          />
                          <path
                            id="Path_52"
                            data-name="Path 52"
                            d="M56.333,741.417v-5.75a3,3,0,0,0-3-3h-5.75v2h5.75a1,1,0,0,1,1,1v5.75Zm-10.75-6.75v-2h-7.75a1,1,0,0,0,0,2Zm8.75,8.75h2v7.75a1,1,0,0,1-2,0Z"
                            transform="translate(2421 -1202)"
                            fill="#b2b2b2"
                            fill-rule="evenodd"
                          />
                        </g>
                      </svg>
                    </div>
                    <span>Crop</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Blur">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17.7"
                        height="21.548"
                        viewBox="0 0 17.7 21.548"
                      >
                        <g
                          id="Group_2"
                          data-name="Group 2"
                          transform="translate(-2461.66 396.798)"
                        >
                          <path
                            id="Path_54"
                            data-name="Path 54"
                            d="M50.11,806.21a.991.991,0,0,0-1.22,0c-1.9,1.45-7.51,6.18-7.48,11.69a8.1,8.1,0,0,0,16.2.01C57.62,812.48,52,807.67,50.11,806.21Z"
                            transform="translate(2421 -1202)"
                            fill="none"
                            stroke="#b2b2b2"
                            stroke-width="1.5"
                          />
                          <path
                            id="Path_55"
                            data-name="Path 55"
                            d="M49.5,806v20"
                            transform="translate(2421 -1202)"
                            fill="none"
                            stroke="#b2b2b2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                          />
                          <path
                            id="Path_56"
                            data-name="Path 56"
                            d="M49.5,822.96l7.7-3.74"
                            transform="translate(2421 -1202)"
                            fill="none"
                            stroke="#b2b2b2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                          />
                          <path
                            id="Path_57"
                            data-name="Path 57"
                            d="M49.5,817.96l7.37-3.58"
                            transform="translate(2421 -1202)"
                            fill="none"
                            stroke="#b2b2b2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                          />
                          <path
                            id="Path_58"
                            data-name="Path 58"
                            d="M49.5,812.96l5.03-2.45"
                            transform="translate(2421 -1202)"
                            fill="none"
                            stroke="#b2b2b2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                          />
                        </g>
                      </svg>
                    </div>
                    <span>Blur</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Text">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="22.5"
                        viewBox="0 0 19 22.5"
                      >
                        <g
                          id="Group_6"
                          data-name="Group 6"
                          transform="translate(-2461 802)"
                        >
                          <rect
                            id="Rectangle_7"
                            data-name="Rectangle 7"
                            width="3"
                            height="20"
                            transform="translate(2469 -799.5)"
                            fill="#b2b2b2"
                          />
                          <rect
                            id="Rectangle_8"
                            data-name="Rectangle 8"
                            width="2.5"
                            height="19"
                            transform="translate(2461 -799.5) rotate(-90)"
                            fill="#b2b2b2"
                          />
                        </g>
                      </svg>
                    </div>
                    <span>Text</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Zoom">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20.315"
                        height="20.31"
                        viewBox="0 0 20.315 20.31"
                      >
                        <g
                          id="Group_7765"
                          data-name="Group 7765"
                          transform="translate(-36.998 -492.25)"
                        >
                          <path
                            id="Path_5833"
                            data-name="Path 5833"
                            d="M623.517,1042.29h4.493"
                            transform="translate(-579.298 -540.573)"
                            fill="none"
                            stroke="#b2b2b2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                          />
                          <path
                            id="Path_5834"
                            data-name="Path 5834"
                            d="M625.288,1045.012v-4.492"
                            transform="translate(-578.821 -541.049)"
                            fill="none"
                            stroke="#b2b2b2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                          />
                          <path
                            id="Path_5835"
                            data-name="Path 5835"
                            d="M626.955,1052.486a8.533,8.533,0,1,0-8.538-8.527A8.534,8.534,0,0,0,626.955,1052.486Z"
                            transform="translate(-580.669 -542.42)"
                            fill="none"
                            stroke="#b2b2b2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                          />
                          <path
                            id="Path_5836"
                            data-name="Path 5836"
                            d="M633.807,1050.807,630,1047"
                            transform="translate(-577.555 -539.307)"
                            fill="none"
                            stroke="#b2b2b2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                          />
                        </g>
                      </svg>
                    </div>
                    <span>Zoom</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Remove">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Group_7705"
                        data-name="Group 7705"
                        width="16.321"
                        height="20"
                        viewBox="0 0 16.321 20"
                      >
                        <defs>
                          <clipPath id="clip-path">
                            <rect
                              id="Rectangle_3334"
                              data-name="Rectangle 3334"
                              width="16.321"
                              height="20"
                              fill="#b2b2b2"
                              stroke="#000"
                              stroke-width="0.3"
                            />
                          </clipPath>
                        </defs>
                        <g
                          id="Group_7704"
                          data-name="Group 7704"
                          clip-path="url(#clip-path)"
                        >
                          <path
                            id="Path_5798"
                            data-name="Path 5798"
                            d="M15.891,102.184q0-2.513,0-5.025a.91.91,0,1,1,1.813-.153c.006.078,0,.156,0,.234q0,4.908,0,9.816a1.737,1.737,0,0,0,1.828,1.828H26.76a1.738,1.738,0,0,0,1.828-1.829q0-4.951,0-9.9a.911.911,0,0,1,.719-.968.894.894,0,0,1,1.077.74,1.8,1.8,0,0,1,.02.3q0,4.929,0,9.859a3.575,3.575,0,0,1-3.6,3.622q-3.655.005-7.309,0a3.561,3.561,0,0,1-3.6-3.6q0-2.459,0-4.919"
                            transform="translate(-14.988 -90.707)"
                            fill="#b2b2b2"
                            stroke="#000"
                            stroke-width="0.3"
                          />
                          <path
                            id="Path_5799"
                            data-name="Path 5799"
                            d="M11.784,2.728h.647c.977,0,1.954,0,2.931,0a.91.91,0,0,1,.128,1.816c-.049,0-.1,0-.149,0H.982a.912.912,0,1,1,0-1.819c1.09,0,2.181,0,3.271,0h.287V2.489c0-.511,0-1.022,0-1.533A.9.9,0,0,1,5.483,0Q8.159,0,10.836,0a.9.9,0,0,1,.947.95c0,.58,0,1.161,0,1.774M6.357,2.71h3.6V1.835h-3.6Z"
                            transform="translate(0 0)"
                            fill="#b2b2b2"
                            stroke="#000"
                            stroke-width="0.3"
                          />
                          <path
                            id="Path_5800"
                            data-name="Path 5800"
                            d="M95.808,132.165c0-1.057,0-2.114,0-3.171a.9.9,0,0,1,1.722-.368,1.2,1.2,0,0,1,.089.454q.008,3.107,0,6.214a.911.911,0,1,1-1.815,0q0-1.564,0-3.128"
                            transform="translate(-90.368 -120.823)"
                            fill="#b2b2b2"
                            stroke="#000"
                            stroke-width="0.3"
                          />
                          <path
                            id="Path_5801"
                            data-name="Path 5801"
                            d="M161.443,132.249c0,1.057,0,2.114,0,3.171a.889.889,0,0,1-.68.87.865.865,0,0,1-.987-.4,1.148,1.148,0,0,1-.141-.523q-.014-3.128,0-6.257a.91.91,0,1,1,1.815.012q0,1.564,0,3.128"
                            transform="translate(-150.562 -120.87)"
                            fill="#b2b2b2"
                            stroke="#000"
                            stroke-width="0.3"
                          />
                        </g>
                      </svg>
                    </div>
                    <span>Remove</span>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="addMedia">
                <input
                  onChange={handleChange}
                  type="file"
                  // id="x"
                  accept="video/mp4"
                />
              </Tab.Pane>
              <Tab.Pane eventKey="introText">
                <button>introText</button>
              </Tab.Pane>
              <Tab.Pane eventKey="Cut">
                <button>Cut</button>
              </Tab.Pane>
              <Tab.Pane eventKey="Crop">
                <button>Crop</button>
              </Tab.Pane>
              <Tab.Pane eventKey="Blur">
                <button>Blur</button>
              </Tab.Pane>
              <Tab.Pane eventKey="Text">
                <button>Text</button>
              </Tab.Pane>
              <Tab.Pane eventKey="Zoom">
                <button>Zoom</button>
              </Tab.Pane>
              <Tab.Pane eventKey="Remove">
                <button>introText</button>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default Sidebar;
