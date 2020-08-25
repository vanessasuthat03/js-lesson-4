import React from "react"
import MyButton from "./MyButton"

const Component1 = ({ setHeadline }) => {
  return (
    <div>
      Component 1
      <MyButton
        title="Sätt headline från Component 1"
        setHeadline={setHeadline}
        setHeadlineTo="Headline from Component 1"
      />
    </div>
  )
}

export default Component1
