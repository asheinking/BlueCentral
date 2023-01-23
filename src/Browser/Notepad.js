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
                placePixel(event.clientX, event.clientY + window.pageYOffset);
            }
        });

    function dragStart(e) {
        drag.current = true;
        placePixel(e.clientX, e.clientY + window.pageYOffset)
    };

    function dragFinish() {
        drag.current = false;
        setBit([...pixels, ...dragList])
        dragList.length = 0;
    }

    async function placePixel(x, y) {
        dragList.push({ x, y, color })
    }

    return (
        <div className="notepad" ref={inputElement} onMouseDown={dragStart} onMouseUp={dragFinish} >
            <div className="optionsWrapper">
            <Button variant="secondary" onClick={() => { setBit([]) }} className="resetButton">Reset Notepad</Button>
            <div key={"inline-radio"} className="radioButtons unselectable">
            {
                [{"Hex":"#ff0000", "Name": "Red"}, {"Hex":"#0000ff", "Name": "Blue"}, {"Hex":"#00ff00", "Name": "Lime Green"}, {"Hex":"#7851a9", "Name": "Royal Purple"}, 
                {"Hex":"#101010", "Name": "Black"}].map((colorMap, number) => 
                    <Form.Check key={number} name="color" inline="true" type='radio'>
                        <Form.Check.Input onClick={()=>{setColor(colorMap["Hex"]);}} style={{backgroundColor: colorMap["Hex"], borderColor: colorMap["Hex"]}} name="color" type='radio' isValid />
                        <Form.Check.Label style={{color: colorMap["Hex"]}}>{colorMap["Name"]}</Form.Check.Label>
                    </Form.Check>
                )
            }
            </div>
            </div>
            {pixels.map((pixel) =>
                <div style={{ left: pixel.x - 3, top: pixel.y - 3, backgroundColor: pixel.color }} className="pixel"></div>
            )}
        </div>
    )
}