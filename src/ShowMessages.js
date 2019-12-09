import React from 'react';
import axios from 'axios';

const databaseUrl = 'http://localhost:3000'


class ShowMessages extends React.Component {
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

    render() {
      return (
        <div>

        </div>
      );
    }
  }

export default ShowMessages;