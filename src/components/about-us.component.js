import React from 'react';
import logo from './../logo.svg';

class AboutUs extends React.Component {
    render() {
       return (
         <div className="page-wrapper">
            <section className="hero-banner">
              <div className="custom-container">
                <div className="hero-banner-content">
                  <h2 className="hero-banner-title">
                    One O One &nbsp;
                    <span className="custom-text-grey">G</span><span className="custom-text-yellow">l</span><span className="custom-text-red">o</span><span className="custom-text-bluelight">b</span><span className="custom-text-green">a</span><span>l</span>
                  </h2>
                  <div className="hero-banner-description"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel risus urna. Suspendisse pretium bibendum ornare.</p></div>
                </div>
              </div>
          </section>
         </div>
       );
    }
}

export default AboutUs;