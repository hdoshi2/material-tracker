import React, {Component, Fragment} from 'react';
import '../App.css';
import {Header, Footer} from './Layouts';
import Exercises from './Exercises';
import {muscles, exercises} from '../store.js'

class App extends Component{
  states = {
    exercises
  }
  
  render(){
    return(
      <Fragment>
        <Header />
        <Exercises />
        <Footer muscles={muscles}/>
      </Fragment>
    )
  }
}

export default App;
