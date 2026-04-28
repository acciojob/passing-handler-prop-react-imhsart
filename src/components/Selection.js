import React, {useState} from "react";
import '../styles/Child.css';

const Selection = ({applyColor}) => {
  const [bgColor, setBgColor] = useState('')
  const [testId, setTestId] = useState('')
  return (
    <div className="fix-box" data-testid={testId} style={{backgroundColor: `${bgColor}`}} onClick={() => {
      applyColor((color) => {
        setBgColor(color.background)
        setTestId(color.key)
      })
      }}>
      <h2 className="subheading">Selection</h2>
    </div>
  )
}


export default Selection