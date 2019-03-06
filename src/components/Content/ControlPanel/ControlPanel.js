import React, { Component } from 'react';
import './ControlPanel.css';
import AuthContext from '../../../context/AuthContext';

class ControlPanel extends Component {
  // Context example for class
  static contextType = AuthContext;

  render() {
    let controlPanel = null;
    if (this.context.auth) {
      controlPanel = <button onClick={() => alert('BOOM!')}>Launch a nuke!</button>;
    }
  
    return (
      <div className='ControlPanel'>
        {controlPanel}
      </div>
    );
  }
}

export default ControlPanel;