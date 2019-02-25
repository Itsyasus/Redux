import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import { incrementar, decrementar } from './redux/action'

class App extends Component {

  increment = () =>{
    const { dispatch} = this.props

    dispatch(incrementar)

    // this.setState( prevState => ({
    //   counter: prevState.counter + 1
    // }))
  }

  decrement = () =>{
    const { dispatch} = this.props
    dispatch(decrementar)


    // this.setState( prevState => ({
    //   counter: prevState.counter - 1
    // }))
  }

  render() {
    const {counter} = this.props
    return (
      <div className="App">
          <div>
            Counter:
            <span>{counter}</span>
          </div>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({

  counter: state.counter

})

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(App);
