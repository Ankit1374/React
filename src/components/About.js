import { getValue } from '@testing-library/user-event/dist/utils'
import React, {useState}from 'react'


function About() {

const [state, setstate] = useState(20)

const getValue=()=>{
  setstate(state+50)
}
  return (
    <div>
      <h1>Welcome to About Us</h1>
      <h2>{state}</h2>
      <button type="button" onClick ={getValue}>Click</button>
    </div>
  )
}

export default About
