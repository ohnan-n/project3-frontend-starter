import React from 'react';
import axios from 'axios';
import DisplayThread from './DisplayThread';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link, } from "react-router-dom";
const databaseUrl = 'http://localhost:3000'

class DisplayThreadList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      threadsArray: [],
      threadId: -1,
    }
    this.getThreadList = this.getThreadList.bind(this)
  }

  getThreadList = (forumId) => {
    axios({
      url: `${databaseUrl}/api/forums/${forumId}`,
      method: 'get'
    })
      .then(response => {

        this.setState({
          threadsArray: response.data.forums.Threads,
        })
      })
  }

  componentDidMount() {
    this.getThreadList(this.props.forumName[1])
  }

  render() {
    let threadList = this.state.threadsArray.map((thread) => {
      let threadUrl = `../show-thread/${thread.id}`
      return (
        <DisplayThread threadId={thread.id} />
      )
    })

    return (


      <div>
        <ul>
          {threadList}
        </ul>

      <div className="ComponentBorder">
        <div className="App">
          <h3>The DisplayThreadList Component</h3>
          <p>this.props.forumName[0] = {this.props.forumName[0]}</p>
          <p>this.props.forumName[1] = {this.props.forumName[1]}</p>
          <ul>
            {threadList}
          </ul>
          {/* <DisplayThread />
          <DisplayThread forumName={this.props.forumName} /> */}
        </div>

      </div>
    );
  }
}

export default DisplayThreadList;