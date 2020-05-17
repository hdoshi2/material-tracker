import React, {Component, Fragment} from 'react';
import '../App.css';
import {Header, Footer} from './Layouts';
import Exercises from './Exercises';
import {muscles, exercises} from '../store.js'

class App extends Component{
  state = {
    exercises
  }

  getExercisesByMuscles(){
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
      const {muscles} = exercise;

      exercises[muscles] = exercises[muscles]
        ? [...exercises[muscles], muscles]
        : [exercise]

      return exercises
    }, {})
    )
  }

  render(){
    console.log(this.getExercisesByMuscles())
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
