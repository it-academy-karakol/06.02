import React, { Component } from 'react';
import './App.css';
import Navigation from '../../components/Navigation/Navigation';
import Content from '../../components/Content/Content';
import AuthContext from '../../contexts/AuthContext';

class App extends Component {
  state = {
    auth: false,
  }

  constructor(props) {
    super(props);

    // Ref example for class
    this.exampleButton = React.createRef();
  }

  toggleHandler = () => {
    this.setState((prevState) => {
      return {
        auth: !prevState.auth,
      }
    });
  }

  render() {
    return (
      <div className="App">
        <AuthContext.Provider value={{
          auth: this.state.auth,
          toggleHandler: this.toggleHandler
        }}>
          <Navigation />
          <Content />
        </AuthContext.Provider>
        <button ref={this.exampleButton}>Example button</button>
      </div>
    );
  }

  componentDidMount() {
    this.exampleButton.current.innerText = 'Changed using Ref';
  }
}

export default App;
