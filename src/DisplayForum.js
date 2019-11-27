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
            <div>
                {/* <MakeThread forumName={this.props.forumName} /> */}
                <DisplayThreadList forumName={this.props.forumName} />
            </div>
        );
    }
}

export default DisplayForum;