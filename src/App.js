import React from 'react';
import Game from './Containers/Game';
import './App.css';
export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={};
  }
  
  render(){
    return (
      <Game/>
    );
  }
}