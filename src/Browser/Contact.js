import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function Contact() {

    return (
        <div className="background fullview">
            <h1 className="fontHeader">GET IN TOUCH WITH ME</h1>
            <Row>
                <Col>
                    <Card bg="dark" className="card">
                        <h3 className="fontHeader text-center">Linked-In</h3>
                        <a className="fontFooter" href="https://www.linkedin.com/in/alexander-heinking-262132200/">@alexanderheinking</a>
                    </Card>
                </Col>
                <Col>
                    <Card bg="dark" className="card">
                        <h3 className="fontHeader text-center">Handshake</h3>
                        <a className="fontFooter" href="https://ksu.joinhandshake.com/stu/users/25825484">@alexanderheinking</a>
                    </Card>

                </Col>
            </Row>
            <Row>
                <Col>
                    <Card bg="dark" className="card bottom">
                        <h3 className="fontHeader text-center">Email</h3>
                        <a className="fontFooter" href="mailto:alexheinking71@gmail.com">alexheinking71@gmail.com</a>
                        <a className="fontFooter" href="mailto:heinkale@ksu.edu">heinkale@ksu.edu</a>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}