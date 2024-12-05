import React, { useState } from 'react'
import a from '../assets/image.jpg'

function TransformImage() {
    const [rot, setRot] = useState(0);
    let [col, setColor] = useState("white")

    const rotateFunc = () => {
        if(rot == 0){
            setRot(30);
        }else{
            setRot(0);
        }
    }
    const colorFunc = () => {
        if(col == "white"){
            setColor("black")
        }else if(col == "black"){
            setColor("white")
        }
    }
  return (
    <div >
        <div style={{padding: "10px", width: "fit-content", border: "1px solid black", backgroundColor: `${col}`}}>
            <img style={{transform: `rotate(${rot}deg)`}} height={"100px"} src={a} alt="" />
        </div>
        <button onClick={rotateFunc}>Rotate</button>
        <button onClick={colorFunc}>Change color</button>
        <button>Change Height</button>
        <button>Change Width</button>
    </div>
  )
}

export default TransformImage