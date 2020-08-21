import React from 'react';
import Header from './components/header.component';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
       header: "Todo Application",
    }
  }

  render() {
    return (
      <div className="App">
        <Header headerProp={this.state.header}></Header>
      </div>
    );
  }

}
export default App;
