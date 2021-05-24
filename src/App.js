import React from "react";
import LeftComponent from './components/LeftComponent/LeftComponent'
import RightComponent from './components/RightComponent/RightComponent'

import './css/App.scss';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      leftTogle: false,
    }
  }

  toggleLeft=()=>{
    this.setState((prev)=> (
      {leftTogle: prev.leftTogle? false: true}
    ))
  }

  render() {
    return (
      <div className="App">
        <LeftComponent left={this.state.leftTogle} toggleLeft={this.toggleLeft}/>
        <RightComponent toggleLeft={this.toggleLeft} />
      </div>
    );
  }
}

export default App;
