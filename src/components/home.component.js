import React from 'react';
import logo from './../logo.svg';

class Home extends React.Component {
    render() {
       return (
         <div className="page-wrapper">
          <section className="hero-banner">
            <div className="custom-container">
              <div className="hero-banner-content">
                <h2 className="hero-banner-title">Lorem ipsum dolor sit amet</h2>
                <div className="hero-banner-description"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel risus urna. Suspendisse pretium bibendum ornare.</p></div>
              </div>
            </div>
          </section>
          <section className="default-section section-purple" id="section-company-brief">
            <div className="custom-container">
              <h2 className="default-section-title">Company Brief</h2>
              <div className="default-section-description">
                <p>We <strong>“One O One Global”</strong> are the trusted brand of a wide range of products. We are well known to offer immense <strong>Quality Standards, Trust & Iconic Brand Value </strong> alongside <strong>Wide Spread Accessibility.</strong></p> 
                <ul>
                  <li><div>We are very keen to have a quality based approach, hence we carry a classic branding tag.</div></li>
                  <li><div>Also, we are very prompt and careful while delivering orders within the specified time period.</div></li>
                  <li><div>We never skipped the Quality Checks, products are packed with absolute care to ensure their damage free supply in transport.</div></li>
                  <li><div>We are widespread not only in Indian market but also foreign countries like Europe.</div></li>
                </ul>
       
                <p>It all started with the passion of Entrepreneurship & need for setting up an iconic brand that offers Trust in all domains. We are a fantastic four founders with tags as engineers, architects. The brains behind the scenes are of Mr. Akshay, Mr. Gaurav, Mr. Prasad, Mr. Niraj, a driving force behind the success of our organization. Owing to his strong management skills and fair business policies, we have accumulated a broad clientele.</p>
              </div>
            </div>
          </section>
          <section className="default-section" id="section-team">
            <div className="custom-container">
              <h2 className="default-section-title">Our Team</h2>
              <div className="default-section-description">
                <p>We ourself are highly qualified and professionals, who enable our organization in producing an extensive range of following products. All our professionals possess complete knowledge of their respective work zones and perform their tasks with utmost dedication to accomplish all the productivity targets maintaining highest quality standards.</p>
                <p>We are onboarded with <strong>Engineers, Technicians, Quality Assurance Team, Sales & Marketing Professionals</strong>. We work in a very collaborative environment that ensures personal / professional growth for each individual. Initially we being in a Corporate Industry know the values & ethics of the organization, hence we carry those values everywhere we work. </p> 
              </div>
            </div>
          </section>
        </div>
       );
    }
}

export default Home;