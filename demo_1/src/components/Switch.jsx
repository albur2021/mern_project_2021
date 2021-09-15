import React, { Component } from 'react';
//styling
const lightOff = {
    backgroundColor: 'gray',
    padding:'50px'
}
const lightOn = {
    backgroundColor:'yellow',
    padding:'50px'
}

class Switch extends Component {

    constructor(props){
     super(props);
     this.state = {
        light: "OFF",
        count: this.props.count
     };
    }
   
render() {
    return (
        <div style={this.state.light == "ON" ? lightOn : lightOff}>
          <h1> I am coming from the Switch Component</h1>
          <h3>The Lights are : {this.state.light}</h3>
          <button onClick={ this.setLight}>Switch</button>
          <h4>Times you have clicked this button: {this.state.count}</h4>
        </div>
        );
    }
    // setLight = () =>{
    //     if(this.state.light == "ON"){
    //         this.setState({light:"OFF"})
    //     }else{
    //         this.setState({light:"ON"})
    //     }
    // }
    //Tirnary Method 
    setLight = () =>{
                      // if it's true        then set to OFF    else set to ON
        this.state.light == 'ON' ? this.setState({light:"OFF"}) : this.setState({light:"ON"});
        this.setState({count:this.state.count+1});
        
        //Element is lighted up by clicking on, but doesn't numbers raises
    //    if(this.state.light == "OFF"){
    //        this.setState({count: +1})
    //    }else{
    //        this.setState({count:0})
    //    }
    }
 }

export default Switch;