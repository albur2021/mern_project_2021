import React, { Component } from 'react';

class Header extends Component {
render() {
    return (
        <>
          <h1>This is Headre</h1>
          {this.props.children}
          <h1>This is Footer</h1>
        </>
        );
    }
 }

export default Header;