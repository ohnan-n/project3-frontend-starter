import React, {Component} from 'react';

class Forums extends Component {
    constructor(props) {
        super()
        this.state= {
            // url: ''
            check: false,
            Forum_name: props.Forum_name
        }
        this.handleClick = this.handleClick.bind(this)
    }

     handleClick() {
        //add a toggle
        console.log(this.state.check)
        this.setState({
            check: !this.state.check
        })
        console.log(this.state.check)
    }

    render() {
        return(
            <div>
                {this.state.Forum_name}
                <button className="toggleButton" onClick={this.handleClick}> 
                    {this.state.check.toString()}
                </button>
            </div>
        )
    }
}



export default Forums;