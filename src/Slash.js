import React, { Component } from 'react';
import './App.css';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link } from "react-router-dom"
const databaseUrl = 'http://localhost:3000'

class Home extends React.Component {
  state = {
    users: [],
    subject: [],
    forums: []
  }

  componentDidMount() {
    this.getUsers()
    this.getForums()
  }

  getForums = () => {
    axios({
      url: `${databaseUrl}/api/forums`,
      method: 'get'
    })
      .then(response => {
        this.setState({ forums: response.data.forums })
      })
  }

  getUsers = () => {
    axios({
      url: `${databaseUrl}/api/users`,
      method: 'get'
    })
      .then(users => {
        this.setState({ users })
      })
  }


  render() {
    console.log(this.state)
    return (
      <Container>
        <Row className="forum">
          <Card sm={3} style={{ width: '15rem' }}>
            <Card.Body>
              <Card.Title>Anime </Card.Title>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </Card.Text>
              <Link to="/anime" className="btn btn-primary" role="button" aria-pressed="true">Anime</Link>
            </Card.Body>
          </Card>

          <Card sm={3} style={{ width: '15rem' }}>
            <Card.Body>
              <Card.Title>Music </Card.Title>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </Card.Text>
              <Link to="/music" className="btn btn-primary" role="button" aria-pressed="true">Music</Link>
            </Card.Body>
          </Card>


          <Card sm={3} style={{ width: '15rem' }}>
            <Card.Body>
              <Card.Title>Oracle Cards </Card.Title>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </Card.Text>
              <Link to="/oraclecards" className="btn btn-primary" role="button" aria-pressed="true">Oracal Cards</Link>
            </Card.Body>
          </Card>


          <Card sm={3} style={{ width: '15rem' }}>
            <Card.Body>
              <Card.Title>Sports </Card.Title>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </Card.Text>
              <Link to="/sports" className="btn btn-primary" role="button" aria-pressed="true">Sports</Link>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    );
  }
}

export default Home;