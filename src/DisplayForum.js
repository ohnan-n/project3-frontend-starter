import React from 'react';
import MakeThread from './MakeThread';
import DisplayThreadList from './DisplayThreadList';
import DisplayThread from './DisplayThread';
const databaseUrl = 'http://localhost:3000'

class DisplayForum extends React.Component {
    constructor(props) {
        super();
        this.state = {
            
        }
    }

    render() {

        return (
            <div className="ComponentBorder">
                <div className="App">
                    <h3>The DisplayForum Component</h3>
                    <p>this.props.forumName[0] = {this.props.forumName[0]}</p>
                    <p>this.props.forumName[1] = {this.props.forumName[1]}</p>
                    <MakeThread forumName={this.props.forumName} />
                    <DisplayThreadList forumName={this.props.forumName} />
                </div>
            </div>
        );
    }
}

export default DisplayForum;
