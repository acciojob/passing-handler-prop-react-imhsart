import React, {useState} from "react";
import '../styles/Child.css';

const Selection = ({applyColor}) => {
  const [bgColor, setBgColor] = useState('')

  return (
    <div className="fix-box" style={{backgroundColor: `${bgColor}`}} onClick={() => {
      applyColor((color) => setBgColor(color.background))
      }}>
      <h2 className="subheading">Selection</h2>
    </div>
  )
}


export default Selection