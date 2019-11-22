import React from 'react';
import './App.css';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
// import Threads from './Threads';
// const databaseUrl = process.env.HEROKU_DB_URL || 'http://localhost:3000'
const databaseUrl = 'https://project3-backend-test.herokuapp.com'

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
        console.log(users)
        this.setState({ users })
      })
  }

  render() {
    console.log(this.state.users)
    console.log("Rendered")
    return (
      <Container>
        <Row className="nav" >
          <h1>LOGO</h1>
        </Row>
        <Row className="forum">
          <Card sm={3}  style={{ width: '15rem' }}>
            <Card.Body>
              <Card.Title>Lorem Ipsum </Card.Title>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              </Card.Text>
              <Button variant="primary">Lorem ipsum</Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    );
  }
}

export default App;
