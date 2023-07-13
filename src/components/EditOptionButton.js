import React from 'react'

function EditOptionButton({btnName,btnClass,hasIcon,ingPath}) {
  return (
    <>
    <button className={btnClass}>
    {hasIcon ? <img className='me-1' src={ingPath} /> : null}
      {btnName}
    </button>
    </>
  )
}

export default EditOptionButton
