import React from 'react';
import axios from 'axios';


const databaseUrl = 'http://localhost:3000'


class ShowThreads extends React.Component {
constructor(props){
    super()
}
componentDidMount() {
    this.getThreads()
  }
  getThreads = () => {
      axios({
        url: `${databaseUrl}/api/threads`,
        method: 'get'
      })
      .then(response => {
        this.setState({threads: response.data.threads})
      })
  }
  renderAllThreads = () => {
    return this.state.threads.map((thread, index) => {
      return <div>
        <li key={thread.id}>
          {thread.subject}
        </li>
        <h3>Threads</h3>
        <ul>
          {this.state.threads[index].MessageItems.map(messageItem => {
            return <li key={thread.id}>{messageItem.message}</li>
          })
          }
        </ul>
      </div>
    })
  }

    render() {
      return (
        <div>
          <ul>
            {this.renderAllThreads()}
          </ul>
        </div>
      );
    }
  }

export default ShowThreads;