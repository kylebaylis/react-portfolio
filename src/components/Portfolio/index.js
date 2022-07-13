import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Portfolio() {
    return (
        <div>
            <h2>My Portfolio</h2>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Img src={require(`../../assets/images/egg.jpg`)} />
                            <Card.Body>
                                <Card.Title>Project</Card.Title>
                                <Button>Application</Button>
                                <Button>GitHub</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img src={require(`../../assets/images/egg.jpg`)} />
                            <Card.Body>
                                <Card.Title>Project</Card.Title>
                                <Button>Application</Button>
                                <Button>GitHub</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Img src={require(`../../assets/images/egg.jpg`)} />
                            <Card.Body>
                                <Card.Title>Project</Card.Title>
                                <Button>Application</Button>
                                <Button>GitHub</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img src={require(`../../assets/images/egg.jpg`)} />
                            <Card.Body>
                                <Card.Title>Project</Card.Title>
                                <Button>Application</Button>
                                <Button>GitHub</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Img src={require(`../../assets/images/egg.jpg`)} />
                            <Card.Body>
                                <Card.Title>Project</Card.Title>
                                <Button>Application</Button>
                                <Button>GitHub</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img src={require(`../../assets/images/egg.jpg`)} />
                            <Card.Body>
                                <Card.Title>Project</Card.Title>
                                <Button>Application</Button>
                                <Button>GitHub</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}

export default Portfolio;