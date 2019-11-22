import React, {Component} from 'react';

class Threads extends Component {
    constructor() {
        super()
        this.state= {
            // url: ''
            check: false,
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
                <button className="toggleButton" onClick={this.handleClick}> 
                    {this.state.check.toString()}
                </button>
            </div>
        )
    }
}


export default Threads;