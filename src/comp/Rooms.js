import React, { Component } from 'react';
import './App.css';
import mySocket from "socket.io-client";


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    
    componentDidMount(){
        
    }
    
  render() {
    return (
      <div>
        <button>Room 1</button>
        <button>Room 2</button>
      </div>
    );
  }
}

export default App;
