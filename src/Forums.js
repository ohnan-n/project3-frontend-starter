import React, { Component } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

class Forums extends Component {
    constructor(props) {
        super()
        this.state = {
            // url: ''
            check: false,
            Forum_name: props.Forum_name
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        //add a toggle
        console.log(this.state.check)
        this.setState({
            check: !this.state.check
        })
        console.log(this.state.check)
    }

    render() {
        return (
            <Container>
                <Row className="nav" >
                <a href="/" className="btn btn-home" role="link" aria-pressed="true">LOGO</a>
                </Row>
                <Row className="forum-title" >
                    <h2>Anime Forum</h2>
                </Row>

                <Row>
                    <Col>
                        <Form sm={2} style={{ width: '40rem' }}>
                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>start a conversation</Form.Label>
                                <Form.Control type="username" placeholder="username" />
                            </Form.Group>

                            <Form.Group controlId="formBasicThread">
                                <Form.Control type="thread title" placeholder="thread title" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                         </Button> 
                        </Form>
                    </Col>

                    <Col>
                        <Container className="side-bar">
                            <Card sm={3} style={{ width: '15rem' }}>
                                <Card.Body>
                                    <Card.Title>Music </Card.Title>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    </Card.Text>
                                    <a href="/forums/music" className="btn btn-primary" role="button" aria-pressed="true">Lorem ipsum</a>
                                </Card.Body>
                            </Card>

                            <Card sm={3} style={{ width: '15rem' }}>
                                <Card.Body>
                                    <Card.Title>Oracle Cards </Card.Title>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                   </Card.Text>
                                    <a href="/forums/oraclecards" className="btn btn-primary" role="button" aria-pressed="true">Lorem ipsum</a>
                                </Card.Body>
                            </Card>
                        </Container>
                    </Col>
                </Row>
            </Container>
            // <div>
            //     {this.state.Forum_name}
            //     <button className="toggleButton" onClick={this.handleClick}>
            //         {this.state.check.toString()}
            //     </button>
            // </div>
        )
    }
}



export default Forums;