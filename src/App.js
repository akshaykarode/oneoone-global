import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header.component';
import Footer from './components/footer.component';
import Home from './components/home.component';
import './App.css';
import AboutUs from './components/about-us.component';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
       header: "1O1 Global",
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={AboutUs} exact/>
            <Route component={Error}/>
           </Switch>
          <Footer/>
        </div> 
      </BrowserRouter>
    );
  }

}
export default App;
