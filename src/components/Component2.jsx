import React from "react"
import MyButton from "./MyButton"

const Component2 = ({ setHeadline }) => {
  return (
    <div>
      Component2
      <MyButton
        title="Sätt headline från Component 2"
        setHeadline={setHeadline}
        setHeadlineTo="Headline from Component 2"
      />
    </div>
  )
}

export default Component2
