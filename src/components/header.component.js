import React from 'react';
import logo from './../logo.svg';

class Header extends React.Component {
    render() {
       return (
         <div>
            <img height="100px" width="100px" src={logo} className="App-logo" alt="logo" />
            <h1>{this.props.headerProp}</h1>
         </div>
       );
    }
}

export default Header;