import React from 'react';
import DisplayMessage from './DisplayMessage';
import axios from 'axios';
// import { BrowserRouter as Router, Switch, Route, Link, } from "react-router-dom";
const databaseUrl = 'http://localhost:3000'

class DisplayThread extends React.Component {
    constructor(props) {
        super();
        this.state = {
            thread: {},
            messages: []
        }
    }

    getThread = (threadId) => {
        axios({
            url: `${databaseUrl}/api/threads/messages/${threadId}`,
            method: 'get'
        })
            .then(response => {
                this.setState({
                    thread: response.data.threads,
                    messages: response.data.threads.MessageItems
                })
                console.log(this.state)
            })
    }

    componentDidMount() {
        this.getThread(this.props.threadId) 
    }

    render() {
        let messageList = this.state.messages.map((message) => {
            return (
                <li key={message.id} className="ItemBorder">
                    message: <br />
                    userId: {message.userId} <br />
                    subject: {message.message} <br />
                    updatedAt: {message.updatedAt} <br />
                    api url: {databaseUrl}/api/messages/{message.id}
                </li>
            )
        })

        return (
            <div className="ComponentBorder">
                <h3>The DisplayThread Component</h3>
                <p className="ItemBorder">
                    thread: <br />
                    userId: {this.state.thread.userId} <br />
                    subject: {this.state.thread.subject} <br />
                    updatedAt: {this.state.thread.updatedAt} <br />
                    api url: {databaseUrl}/api/threads/{this.state.thread.id}
                </p>
                <ul>
                    {messageList}
                </ul>

            </div>
        );
    }
}

export default DisplayThread;