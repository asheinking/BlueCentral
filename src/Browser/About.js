import OverlayNav from './OverlayNav'
import { React, useEffect } from 'react'
import { ReactPhotoCollage } from "react-photo-collage"

export default function Home() {
    const setting = {
        width: '800px',
        height: ['250px', '170px'],
        layout: [1, 4],
        photos: [
            { source: '/bmcdlunch.png' },
            { source: "/frat.png" },
            { source: "/charrette.jpg" },
            { source: "/destin.png" },
            { source: "/harvard.png" },
            { source: "/krach.png" },
            { source: "/bmcd.jpg" },
            { source: "/school.png" },
        ],
        showNumOfRemainingPhotos: true
    };
    return (
        <div>
            
            <div>
                <ReactPhotoCollage {...setting} />
            </div>
        </div>
    )
}