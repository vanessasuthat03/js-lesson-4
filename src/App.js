import React from "react"
import "./App.css"
import { useState } from "react"
import Component1 from "./components/Component1"
import Component2 from "./components/Component2"

function App() {
  let [headline, setHeadline] = useState("hej")
  return (
    <div className="App">
      <h1>{headline}</h1>
      <Component1 setHeadline={setHeadline} />
      <Component2 setHeadline={setHeadline} />
    </div>
  )
}

export default App
