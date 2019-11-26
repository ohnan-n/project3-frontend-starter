import React from 'react';
import DisplayMessage from './DisplayMessage';
import axios from 'axios';
import { Container, Button, Card, Accordion, Form } from 'react-bootstrap';
const databaseUrl = 'http://localhost:3000'
class DisplayThread extends React.Component {
    constructor(props) {
        super();
        this.state = {
            thread: {},
            messages: [],
            newMessageString: ''
        }
    }

    deleteMessage = (e) => {
        let messageToDelete = e.target.name
        e.preventDefault()
        axios({
            url: `${databaseUrl}/api/messageitems/${messageToDelete}`,
            method: 'delete'
        })
            .then(() => {
                let newMessagesArray = this.state.messages.filter(message => message.id != messageToDelete)
                this.setState({ messages: newMessagesArray })
            })
    }
    createMessage = e => {
        e.preventDefault()
        axios({


    deleteMessage = (e, id) => {
        e.preventDefault()
        axios({
            url: `${databaseUrl}/api/messageitems/${id}`,
            method: 'delete'
        })
        .then(() => {
            let newMessagesArray = this.state.messages.filter(message => message.id != id)
            this.setState({messages: newMessagesArray})
        })
    }

    createMessage = e => {
        e.preventDefault()
        axios ({

            url: `${databaseUrl}/api/messageitems`,
            method: 'post',
            data: {
                message: this.state.newMessageString,
                userId: this.state.thread.userId,
                threadId: this.state.thread.id
            }
        })

            .then(response => {
                this.setState(prevState => (
                    { messages: [...prevState.messages, response.data.messageItems] }
                )
                )
            })
    }

        .then(response => {
            console.log(response)
            this.setState(prevState => (
                { messages: [...prevState.messages, response.data.messageItem]  }
            )
        )
    })
}



    opentextarea = () => {
        var input = document.createElement('textarea');
        input.name = 'post';
        input.maxLength = 5000;
        input.cols = 80;
        input.rows = 40;
        input.className = 'myCustomTextarea';
        var button = document.createElement('button');
        var oBody = document.getElementById("body");
        while (oBody.childNodes.length > 0) {
            oBody.removeChild(oBody.childNodes[0]);
        }
        oBody.appendChild(input);
        oBody.appendChild(button);

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
            })
    }
    onSubmitMessage = e => {
        e.preventDefault()

    }

        console.log(e.target.textarea1.value)
        console.log(e.target.name)
    }


    componentDidMount() {
        this.getThread(this.props.threadId)
    }
    render() {

        let messageList = this.state.messages.map(message => {
            return (

                <DisplayMessage key={message.id} messageId={message.id} deleteMessage={this.deleteMessage} userId={message.userId} message={message.message} updatedAt={message.updatedAt} />

        console.log(this.state)
        let messageList = this.state.messages.map(message => {
            return (
                
                <li key={message.id} className="ItemBorder">
                    message: <br />
                    userId: {message.userId} <br />
                    subject: {message.message} <br />
                    updatedAt: {message.updatedAt} <br />
                    api url: {databaseUrl}/api/messages/{message.id}
                    <button onClick={e => this.deleteMessage(e, message.id)}>Delete Message</button> 
                </li>

            )
        })
        return (

            <Container>
                <Card>
                    <Card.Body>
                        <Card.Title>{this.state.thread.subject}</Card.Title>
                        <Card.Text>
                            Created By: PASS USER ID
                       </Card.Text>
                        <Accordion>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                POST
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <ul>
                                        <form name={this.state.thread.id} onSubmit={e => this.createMessage(e)}>
                                            <textarea id="textareabox" name="textarea1" placeholder="Start here..." onChange={(e) => this.setState({ newMessageString: e.target.value })}></textarea>
                                            <button>Submit</button>
                                        </form>
                                        {messageList}
                                    </ul>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Accordion>
                    </Card.Body>
                </Card>
            </Container >

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
                    <form name={this.state.thread.id} onSubmit={e => this.createMessage(e)}>
                    <textarea id="textareabox" name="textarea1" placeholder="Start here..." onChange={(e) => this.setState({newMessageString: e.target.value})}></textarea>
                    <button>Submit</button>
                    </form>
                    {messageList}
                </ul>
            </div>
         

        );
    }
    
}

export default DisplayThread;