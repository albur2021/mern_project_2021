import React, { Component } from 'react';

class Wrapper extends Component {
render() {
    return (
        <div>
          <p>I am on top of the children</p>
          {this.props.children}
          <p>I am below the children</p>
        </div>
        );
    }
 }

export default Wrapper;