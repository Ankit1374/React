import { getByDisplayValue } from '@testing-library/react'
import React, { Component } from 'react'

export default class Welcome extends Component {

    constructor(props) {

        super(props)

        this.state = {
            message: 'Welcome',
            data: 'testing data',
            madeby: 'Ankit'
        };
    }

    getValue = () =>{ 
        this.setState({
            message: "Hello!! How are you "
        });
    }

  render() {
    return (
      <div className='App'>
        {this.state.message}  
        <h1> Welcome!!{this.state.madeby}</h1>
        <button type = "button" class = "btn btn-success" onClick = {this.getValue}>Click</button>
      </div>
    )
  }
}
