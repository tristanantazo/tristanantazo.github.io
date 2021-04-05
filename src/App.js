import React from "react";
import LeftComponent from './components/LeftComponent/LeftComponent'
import RightComponent from './components/RightComponent/RightComponent'

import './css/App.scss';
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <LeftComponent />
        <RightComponent />
      </div>
    );
  }
}

export default App;
