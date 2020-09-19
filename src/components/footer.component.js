import React from 'react';
import logo from './../logo.svg';

class Footer extends React.Component {
    render() {
       return (
        <footer>
          <div className="custom-container">
            <div className="mb-5 text-center">
              <img className="img-fluid" src="https://via.placeholder.com/260x50/b3b3b3/5e3658/?text=Placeholder Logo" alt="" />
            </div>
            
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <h2 className="footer-title text-uppercase">Some title</h2>
                <ul>
                  <li><a href="javascript:void(0)">Link 1</a></li>
                  <li><a href="javascript:void(0)">Link 2</a></li>
                  <li><a href="javascript:void(0)">Link 3</a></li>
                  <li><a href="javascript:void(0)">Link 4</a></li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <h2 className="footer-title text-uppercase">Connect with us</h2>
                <ul>
                  <li><a href="javascript:void(0)">Link 1</a></li>
                  <li><a href="javascript:void(0)">Link 2</a></li>
                  <li><a href="javascript:void(0)">Link 3</a></li>
                  <li><a href="javascript:void(0)">Link 4</a></li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <h2 className="footer-title text-uppercase">Contact us</h2>
                <address>
                  123, Some building name,<br/>
                  Some road name, <br/>
                  City, State - 123456.
                </address>
              </div>
            </div>
            <div className="copy-right">&copy; Copyright reserved by One-O-One Global</div>
          </div>
        </footer>
      );
    }
}

export default Footer;