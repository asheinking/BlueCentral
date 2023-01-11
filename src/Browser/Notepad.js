import React, { Component, useState, useCallback, useEffect } from 'react';
import './styles.scss'

export default function Notepad() {

    let inputElement = React.useRef()

    const [pixels, setBit] = useState([]);

    const drag = React.useRef(false);

    var dragList = []

    function dragStart(e) {
        drag.current = true;
        placePixel(e.clientX, e.clientY)
        document.addEventListener(
            'mousemove', async (event) => {
                if (drag.current === true) {
                    console.log(event)
                    placePixel(event.clientX, event.clientY);
                    console.log(pixels)
                }
            });
    };

    function dragFinish() {
        drag.current = false;
        console.log("YOU ARE NO LONGER DRAGGIN!")
        setBit([...pixels, ...dragList])
        dragList = []
        document.removeEventListener('mousemove', placePixel);
    }

    async function placePixel(x, y) {
        dragList.push({x,y})
    }

    return (
        <div className="notepad" ref={inputElement} onMouseDown={dragStart} onMouseUp={dragFinish} >
            {pixels.map((pixel) =>
                <div style={{ left: pixel.x - 3, top: pixel.y - 3 }} className="pixel"></div>
            )}
        </div>
    )
}