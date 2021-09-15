import React, { Component } from 'react';

class Card extends Component {
render() {
    return (
        <div>
          <h2>Hello from the Card Component!</h2>
          <h4>Your Lucky Number is: {this.props.lucky} {this.props.word}</h4>
          

        </div>
        );
    }
 }

export default Card;