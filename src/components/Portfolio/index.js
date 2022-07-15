import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Portfolio() {
    return (
        <div className='portfolio'>
            <h2>My Portfolio</h2>
            <Container className='portCon'>
                <Row>
                    <Col>
                        <Card className='card'>
                            <Card.Img src={require(`../../assets/images/egg.jpg`)} />
                            <Card.Body>
                                <Card.Title>Run Buddy</Card.Title>
                                <Button><a className='portbtn' href="https://kylebaylis.github.io/run-buddy/" target="_blank" rel="noreferrer">Application</a></Button>
                                <Button><a className='portbtn' href="https://github.com/kylebaylis/run-buddy" target="_blank" rel="noreferrer">GitHub</a></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='card'>
                            <Card.Img src={require(`../../assets/images/egg.jpg`)} />
                            <Card.Body>
                                <Card.Title>Password Generator</Card.Title>
                                <Button><a className='portbtn' href="https://kylebaylis.github.io/password-generator/" target="_blank" rel="noreferrer">Application</a></Button>
                                <Button><a className='portbtn' href="https://github.com/kylebaylis/password-generator" target="_blank" rel="noreferrer">GitHub</a></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className='card'>
                            <Card.Img src={require(`../../assets/images/egg.jpg`)} />
                            <Card.Body>
                                <Card.Title>Code Quiz</Card.Title>
                                <Button><a className='portbtn' href="https://kylebaylis.github.io/code-quiz/" target="_blank" rel="noreferrer">Application</a></Button>
                                <Button><a className='portbtn' href="https://github.com/kylebaylis/code-quiz" target="_blank" rel="noreferrer">GitHub</a></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='card'>
                            <Card.Img src={require(`../../assets/images/egg.jpg`)} />
                            <Card.Body>
                                <Card.Title>Workday Scheduler</Card.Title>
                                <Button><a className='portbtn' href="https://kylebaylis.github.io/workday-scheduler/" target="_blank" rel="noreferrer">Application</a></Button>
                                <Button><a className='portbtn' href="https://github.com/kylebaylis/workday-scheduler" target="_blank" rel="noreferrer">GitHub</a></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className='card'>
                            <Card.Img src={require(`../../assets/images/egg.jpg`)} />
                            <Card.Body>
                                <Card.Title>Weather Dashboard</Card.Title>
                                <Button><a className='portbtn' href="https://kylebaylis.github.io/Challenge6-WeatherDash/" target="_blank" rel="noreferrer">Application</a></Button>
                                <Button><a className='portbtn' href="https://github.com/kylebaylis/Challenge6-WeatherDash" target="_blank" rel="noreferrer">GitHub</a></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='card'>
                            <Card.Img src={require(`../../assets/images/egg.jpg`)} />
                            <Card.Body>
                                <Card.Title>Budget Tracker</Card.Title>
                                <Button><a className='portbtn' href="https://gentle-basin-85791.herokuapp.com/" target="_blank" rel="noreferrer">Application</a></Button>
                                <Button><a className='portbtn' href="https://github.com/kylebaylis/PWA-Budget-Tracker" target="_blank" rel="noreferrer">GitHub</a></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}

export default Portfolio;