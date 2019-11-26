import React, { Component } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';

const databaseUrl = 'http://localhost:3000'


class Forums extends Component {
    constructor(props) {
        super()
        this.state = {
            // url: ''
            check: false,
            // Forum_name: props.Forum_name,
            triggerThread: false,
            newThread: {},
            newPath: '',
        }
        this.handleClick = this.handleClick.bind(this)
        this.showThread = this.showThread.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    componentDidMount() {
        this.setForumName()
    }

    setForumName() {
        let newPath = this.props.location.pathname.slice(8);
        this.setState({ newPath })
    }

    handleChange(e) {
        let newThread = {
            [e.target.name]: e.target.value
        }
        newThread.forum = this.props.newPath
        newThread.forum = this.props.location.pathname
        let newLocation = newThread.forum
        let newPath = newLocation.slice(8);
        this.setState(prevState => (
            { newThread: { ...prevState.newThread, ...newThread } }
        ))
    }

    handleClick(e) {
        e.preventDefault()
        this.setState({
            check: !this.state.check
        })
        axios({
            url: `${databaseUrl}/api/forums`,
            method: 'post'
        })
            .then(response => {
                this.setState({ forums: response.data.forums })
            })

    }

    showThread(e) {
        e.preventDefault()
        this.setState({
            triggerThread: true


        })
    }

    render() {

        return (
            <Container>
                <Row className="nav" >
                    <a href="/" className="btn btn-home" role="link" aria-pressed="true">INTERACT</a>
                </Row>
                <Row className="forum-title" >
                    <h2>{this.props.forumName} Forum</h2>
                </Row>

                <Row>
                    <Col>
                        <Form sm={2} style={{ width: '40rem' }} onChange={this.handleChange}>
                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>start a conversation</Form.Label>
                                <Form.Control type="text" placeholder="username" name='username' />
                            </Form.Group>

                            <Form.Group controlId="formBasicThread">
                                <Form.Control type="text" placeholder="thread title" name='subject' />
                            </Form.Group>
                            <Button onClick={this.showThread} variant="primary" type="submit">
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
        )
    }
}



export default Forums;