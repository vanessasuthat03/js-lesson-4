import React from "react"

const MyButton = ({ setHeadline, title, setHeadlineTo }) => {
  function handleOnClick() {
    setHeadline(setHeadlineTo)
  }
  return (
    <div>
      <button onClick={handleOnClick}>{title}</button>
    </div>
  )
}

export default MyButton
