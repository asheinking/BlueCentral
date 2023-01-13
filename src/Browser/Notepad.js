import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './styles.scss'

export default function Notepad() {

    let inputElement = React.useRef()

    const [pixels, setBit] = useState([]);

    const drag = React.useRef(false);

    const [color, setColor] = useState("#ff0000")

    var dragList = []


    document.addEventListener(
        'mousemove', (event) => {
            if (drag.current === true) {
                console.log(event)
                placePixel(event.clientX, event.clientY + window.pageYOffset);
                console.log(pixels)
            }
        });

    function dragStart(e) {
        drag.current = true;
        placePixel(e.clientX, e.clientY + window.pageYOffset)
    };

    function dragFinish() {
        drag.current = false;
        setBit([...pixels, ...dragList])
        dragList = []
    }

    async function placePixel(x, y) {
        dragList.push({ x, y, color })
    }

    return (
        <div className="notepad" ref={inputElement} onMouseDown={dragStart} onMouseUp={dragFinish} >
            <Button variant="secondary" onClick={() => { setBit([]) }} className="resetButton">Reset Notepad</Button>
            <div key={"inline-radio"} className="radioButtons">
            {
                [{"Hex":"#ff0000", "Name": "Red"}, {"Hex":"#0000ff", "Name": "Blue"}, {"Hex":"#00ff00", "Name": "Lime Green"}].map((colorMap, number) => 
                    <Form.Check key={number} name="color" className="radioButtons" type='radio'>
                        <Form.Check.Input  onClick={()=>{setColor(colorMap["Hex"]);}} style={{backgroundColor: "solid" + color + "!important", borderColor: color + "!important"}} inline className="radioButtons" name="color" type='radio' isValid />
                        <Form.Check.Label inline>{colorMap["Name"]}</Form.Check.Label>
                    </Form.Check>
                )
            }
            </div>
            {pixels.map((pixel) =>
                <div style={{ left: pixel.x - 3, top: pixel.y - 3, backgroundColor: pixel.color }} className="pixel"></div>
            )}
        </div>
    )
}