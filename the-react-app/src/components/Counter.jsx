import React, { Component } from 'react';


class Counter extends Component{

    state = {
        count: 5
    };

    render(){
        //return View(JSX)
        return (
            <div>
                <h4>{this.props.title}: {this.state.count}</h4>
                <div>
                    <button>Inc</button> &nbsp;
                    <button>Decr</button>
                </div>
            </div>
        );
    }
}
export default Counter;
