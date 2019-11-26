import React from 'react';
import axios from 'axios';
// import { BrowserRouter as Router, Switch, Route, Link, } from "react-router-dom";
const databaseUrl = 'http://localhost:3000'

class DisplayMessage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      message: 'default message',
      userId: -1,
      updatedAt: 'default time'
    }
    this.getOneMessage = this.getOneMessage.bind(this)
  }

  getOneMessage = (messageId) => {
    axios({
      url: `${databaseUrl}/api/messageItems/${messageId}`,
      method: 'get'
    })
      .then(response => {
        // console.log(response)
        // console.log(response.data.messageItems.message)
        // console.log(response.data.messageItems.userId)
        // console.log(response.data.messageItems.updatedAt)
        // console.log(response.data.messageItems.threadId)
        this.setState({
          message: response.data.messageItems.message,
          userId: response.data.messageItems.userId,
          updatedAt: response.data.messageItems.updatedAt,
        })
      })
  }

  componentDidMount() {
    this.getOneMessage(17)
  }

  render() {

    return (
      <div className="ComponentBorder">
        <div className="App">
          <h3>The DisplayMessage Component</h3>
          <p>this.props.forumName[0] = {this.props.forumName[0]}</p>
          <p>this.props.forumName[1] = {this.props.forumName[1]}</p>
        </div>
        <li>
          <strong>this.state.message:</strong> {this.state.message} <br />
          <strong>this.state.userId:</strong> {this.state.userId} <br />
          <strong>this.state.updatedAt:</strong> {this.state.updatedAt}
        </li>
      </div>
    );
  }
}

export default DisplayMessage;