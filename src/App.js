import React from 'react';
import './App.css';
import { HashRouter, Route, Link } from "react-router-dom";
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
// import Threads from './Threads';
// const databaseUrl = process.env.HEROKU_DB_URL || 'http://localhost:3000'
const databaseUrl = 'http://localhost:3000'

class App extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    this.getUsers()
  }

  getUsers = () => {
    axios({
      url: `${databaseUrl}/api/users`,
      // url: 'https://project3-backend-test.herokuapp.com/api/users',
      method: 'get'
    })
      .then(users => {
        this.setState({ users })
      })
  }

  render() {
    return (
      <HashRouter baseName='/'>
        <Container>
          <Row className="nav" >
            <h1>LOGO</h1>
          </Row>
          <Row className="forum">
            <Card sm={3} style={{ width: '15rem' }}>
              <Card.Body>
                <Card.Title>Anime </Card.Title>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </Card.Text>
                <Button variant="primary">Lorem ipsum</Button>
              </Card.Body>
            </Card>
            <Card sm={3} style={{ width: '15rem' }}>
              <Card.Body>
                <Card.Title>Music </Card.Title>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </Card.Text>
                <Button variant="primary">Lorem ipsum</Button>
              </Card.Body>
            </Card>
            <Card sm={3} style={{ width: '15rem' }}>
              <Card.Body>
                <Card.Title>Sports </Card.Title>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </Card.Text>
                <Button variant="primary">Lorem ipsum</Button>
              </Card.Body>
            </Card>
            <Card sm={3} style={{ width: '15rem' }}>
              <Card.Body>
                <Card.Title> Oracle Cards </Card.Title>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </Card.Text>
                <Button variant="primary">Lorem ipsum</Button>
              </Card.Body>
            </Card>
          </Row>
          
           

          <Route />
        </Container>
      </HashRouter>
    );
  }
}

export default App;
