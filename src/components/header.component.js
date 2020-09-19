import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../logo.svg';

class Header extends React.Component {
    render() {
       return (
         <header>
         <div className="custom-container">
           <nav className="navbar navbar-expand-lg navbar-light">
             <a className="navbar-brand" href="#">Navbar</a>
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
             </button>
           
             <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav ml-auto">
                 <li className="nav-item active">
                   <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                 </li>
                 <li className="nav-item">
                   <NavLink className="nav-link" to="/about">Link</NavLink>
                 </li>
                 <li className="nav-item dropdown">
                   <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     Dropdown
                   </a>
                   <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                     <a className="dropdown-item" href="#">Action</a>
                     <a className="dropdown-item" href="#">Another action</a>
                     <div className="dropdown-divider"></div>
                     <a className="dropdown-item" href="#">Something else here</a>
                   </div>
                 </li>
               </ul>
             </div>
           </nav>
         </div>
       </header>
     
       );
    }
}

export default Header;