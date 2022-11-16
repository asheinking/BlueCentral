import { ReactPhotoCollage } from "react-photo-collage"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function PAbout() {
    const setting = {
        width: '100%',
        height: ["150px", '170px'],
        layout: [2, 4],
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
        <div className="background">
            <h1 className="fontHeader">Greetings! I am Alex Heinking</h1>
            <p className="fontFooter">I am a Junior studying Computer Science at Kansas State University.</p>
            <p className="fontFooter">While my studies at my University have been largely limited to C#, I recently completed an internship with Burns & McDonnell <br />
            that highlighted javascript, particularly the Angular framework. Branching off of that experience I have built this website using the React framework <br />
            to get exposed to different frameworks that are applied in real world jobs.</p>
            <p className="fontFooter">Originally I am from Shawnee, Kansas where I was born and raised in a family of four, and where I grauated from Mill Valley Highschool.</p>
            <p className="fontFooter">For most of my life I have been extremely passionate about all things computer related, and even built my first computer <br />
                when I was in just 7th grade. This was just me getting my foot into the door however because I would later take all the coding classes <br />
                my high school had to offer (which sadly was not many), which brought me to being a Computer Science major. <br />
                Most people say when going to college that everyone changes their major at least once, however I am lucky to be able to say I knew the route <br />
                I wanted to go down since I was in middle school.</p>
            <br /> <br />
            <Row>
                <Col xs={12} md={8}>
                    <h2 className="fontHeader collageHead">My life as of recently..</h2>
                    <div className="collage">
                        <ReactPhotoCollage {...setting} />
                    </div>
                </Col>
                <Col xs={6} md={4}>
                    
                </Col>

            </Row>

        </div>
    )
}