import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link, } from "react-router-dom";
const databaseUrl = 'http://localhost:3000'

class MakeThread extends React.Component {
  constructor(props) {
    super();
    this.state = {
        //   forumName: 'Music',
    }
  }

  render() {
    return (
      <div className="ComponentBorder">
          <div className="App">
            <h3>The MakeThread Component</h3>
            <p>this.props.forumName[0] = {this.props.forumName[0]}</p>
            <p>this.props.forumName[1] = {this.props.forumName[1]}</p>
          </div>
      </div>
    );
  }
}

export default MakeThread;
