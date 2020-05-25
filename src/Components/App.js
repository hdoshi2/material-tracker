import React, { Component } from 'react';
import '../App.css';
import { Header, Footer } from './Layouts';
import Exercises from './Exercises';
import { muscles, exercises } from '../store.js'

class App extends Component {
  state = {
    exercises,
    category: '',
    exercise: {}
  }


  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise]

        return exercises
      }, {})
    )
  }

  //Sets state for the selected categeory in the footer Tab
  handleCategorySelected = category => {
    this.setState({
      category
    })
  }

  //Displays exercise selected on right pane
  handleExcerciseSelected = id => {
    this.setState((prevState) => ({
      exercise: prevState.exercises.find(ex => ex.id === id)
    }))
  }

  render() {
    const exercises = this.getExercisesByMuscles();
    const  { category, exercise } = this.state;

    return (
      <>
        <Header />
        <Exercises exercises={exercises} category={category} onSelect={this.handleExcerciseSelected} exercise={exercise} />
        <Footer muscles={muscles} category={category} onSelect={this.handleCategorySelected} />
      </>
    )
  }
}

export default App;
