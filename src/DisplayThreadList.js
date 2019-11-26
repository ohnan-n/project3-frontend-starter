import React from 'react';
import axios from 'axios';
import DisplayThread from './DisplayThread';
import { BrowserRouter as Router, Switch, Route, Link, } from "react-router-dom";
// import {
//   HashRouter as Router,
//   Route,
//   Link,
//   Switch
// } from 'react-router-dom';

// import { BrowserRouter as Router, Switch, Route, Link, } from "react-router-dom";
const databaseUrl = 'http://localhost:3000'

class DisplayThreadList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      //   forumName: 'Music',
      threadsArray: [],
      threadId: -1,
      // forumId: this.props.forumName[1]
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
        console.log(this.state.threadsArray)
      })
  }

  componentDidMount() {
    this.getThreadList(this.props.forumName[1])
  }

  render() {
    let threadList = this.state.threadsArray.map((thread) => {
      let threadUrl = `../show-thread/${thread.id}`
      return (
        <li key={thread.id} className="ItemBorder">
          thread: <br />
          userId: {thread.userId} <br />
          subject: {thread.subject} <br />
          updatedAt: {thread.updatedAt} <br />
          api url: {databaseUrl}/api/threads/{thread.id} <br />
          <Router basename="/">
            <Link to={threadUrl}>Open threadId {thread.id}</Link>
            <Link to='/anime'>hide</Link>
            <Route path="/show-thread">
              <DisplayThread threadId={thread.id} />
            </Route>
            <Route path='/anime'></Route>
          </Router>
    {/* <a href={threadUrl} threadId={thread.id} >Open threadId {thread.id}</a> */}

          {/* <a href={databaseUrl}"/api/threads/7"</li>>click</a> */}
        </li>
      )
    })

    return (
      <div className="ComponentBorder">
        <div className="App">
          <h3>The DisplayThreadList Component</h3>
          <p>this.props.forumName[0] = {this.props.forumName[0]}</p>
          <p>this.props.forumName[1] = {this.props.forumName[1]}</p>
          <ul>
            {threadList}
          </ul>
          {/* <DisplayThread /> */}
          {/* <DisplayThread forumName={this.props.forumName} /> */}
        </div>
      </div>
    );
  }
}

export default DisplayThreadList;