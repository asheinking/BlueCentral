import React, { Component, useState } from 'react';
import './styles.scss'

export default function Notepad() {
    
    let inputElement = React.useRef()

    let drag = false
    /*
    document.addEventListener(
        'mousedown', () => dragging = false);
  
    document.addEventListener(
        'mousemove', () => {
            dragging = true
            while(dragging){

            }
        });
  
    document.addEventListener(
        'mouseup', () => console.log(
            dragging ? 'drag' : 'click'));
*/

    

    const [pixels, setBit] = useState([])
   
    function dragStart  (e)  {
        //drag = true;
        while(drag){
           //inputElement.current.click()
        }
    };

    function dragFinish() {
        drag = false;
    }
    
    function placePixel  (event)  {
        console.log(event)
        setBit([
            ...pixels,
            {
                x: event.clientX,
                y: event.clientY
            }
        ]);
        console.log(pixels)
    }

   
    return(
        <div className="notepad" ref={inputElement} onMouseDown={dragStart} onMouseUp={dragFinish} onClick={placePixel} >
            {pixels.map( (pixel) =>
                <div style={{left: pixel.x - 3, top: pixel.y - 3}} className="pixel"></div>
            )}
        </div>
    )
}