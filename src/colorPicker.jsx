import React, {useState} from "react";
function ColorPicker(){

    const [color, setColor] = useState("#ffffff")
    function handleColor(event){
        setColor(event.target.value)
    }

    return(
        <>
        <div className="color-picker">
            <h1>Color picker</h1>
            <div className="color-display" style={{background: color}}>
                <p>color: {color}</p>
                <label htmlFor="">select a color</label>
                <input type="color" value={color} onChange={handleColor}/>
            </div>
        </div>
        </>
    )
}
export default ColorPicker