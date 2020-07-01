import React, { Component } from 'react';



class Counter extends Component{

    state = {
        count: 5
    };
  

    constructor(props){
        super(props);
        //ES6
        this.inc = this.inc.bind(this);
    }
    inc(){
        console.log("inc clicked...");
        //this.state.count++;
        const updatedCount = this.state.count + 1;
        //async in nature
        this.setState({
            count: updatedCount
        }, () => {
            console.log("count: ", this.state.count);
        });
       // this.test.count+=1;
        //console.log("this.test.count", this.test.count)
    }
    //ES7
    decr = ()=>{

        console.log("decr clicked...");
        //this.state.count++;
        const updatedCount = this.state.count - 1;
        //async in nature
        this.setState({
            count: updatedCount
        }, () => {
            console.log("count: ", this.state.count);
        });

    }

    render(){
        //return View(JSX)
        return (
            <div>
                <h4>{this.props.title}: {this.state.count}</h4>
                
                <div>
                    <button onClick={this.inc}>Inc</button> &nbsp;
                    <button onClick={this.decr}>Decr</button>
                </div>
            </div> 
        );
    }
}
export default Counter;
