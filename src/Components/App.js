import React, {Component, Fragment} from 'react';
import '../App.css';
import {Header, Footer} from './Layouts';
import Exercises from './Exercises';
import {muscles, exercises} from '../store.js'

class App extends Component{
  state = {
    exercises,
    category: 'Chest'
  }

  getExercisesByMuscles(){
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
      const {muscles} = exercise;

      exercises[muscles] = exercises[muscles]
        ? [...exercises[muscles], exercise]
        : [exercise]

      return exercises
    }, {})
    )
  }

  handleCategorySelected = category => {
    this.setState({
      category
    })
  }

  render(){
    const exercises = this.getExercisesByMuscles(),
     {category} = this.state;
    return(
      <Fragment>
        <Header />
        <Exercises exercises={exercises}/>
        <Footer muscles={muscles} category={category} onSelect={this.handleCategorySelected}/>
      </Fragment>
    )
  }
}

export default App;
