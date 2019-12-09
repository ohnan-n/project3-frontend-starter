import React from 'react';
import DisplayMessage from './DisplayMessage';
import axios from 'axios';
import { Container, Button, Card, Accordion, InputGroup, FormControl, Form, Modal } from 'react-bootstrap';
const databaseUrl = 'http://localhost:3000'

function ShowMessageModal(props) {
    return (
      <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
          <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          </Modal.Title>
          <Button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          </Button>
          </Modal.Header>
          <Modal.Body>
          <Form.Group>
              <label for="message-text" class="col-form-label"></label>
              <textarea class="form-control" id="message-text"></textarea>
          </Form.Group>
          </Modal.Body>
          <Modal.Footer  className="text-muted">
          <Button onClick={e => this.deleteMessage(e)} >Close</Button>
          <Button type="button" class="btn btn-primary">Send message</Button>
          </Modal.Footer>
      </Modal>
    );
  }

class DisplayThread extends React.Component {
    constructor(props) {
        super();
        this.state = {
            thread: {},
            messages: [],
            newMessageString: '',
            modalShow: false,
            setModalShow: false
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
    componentDidMount() {
        this.getThread(this.props.threadId)
    }
    render() {
        let messageList = this.state.messages.map(message => {
            return (

                <DisplayMessage key={message.id} messageId={message.id} deleteMessage={this.deleteMessage} userId={message.userId} message={message.message} updatedAt={message.updatedAt} />
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
                            <Button variant="primary" onClick={() => this.setState({setModalShow: true})}>
                                POST Message
                            </Button>
                            <ShowMessageModal props={this.props}
                                show={true}
                                //onHide={() => setModalShow(false)}
                            />
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                POST
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <ul>
                                        <form onSubmit={e => this.createMessage(e)}>
                                        <InputGroup 
                                        name={this.state.thread.id} 
                                        aria-describedby="basic-addon1" 
                                       variant="outline-secondary"
                                        className="mb-3">

                                            <FormControl
                                                textarea id="textareabox" name="textarea1" placeholder="Start here..." onChange={(e) => this.setState({ newMessageString: e.target.value })} 
                                            
                                            />
                                            <InputGroup.Prepend>
                                            <Button type="submit">Button</Button>
                                            </InputGroup.Prepend>
                                        </InputGroup>
                                        {messageList}
                                        </form>
                                    </ul>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Accordion>
                    </Card.Body>
                </Card>
            </Container >
        );
    }
}

export default DisplayThread;