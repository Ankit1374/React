import React from 'react'
import Contact from './Contact'

function Home() { 
  const info = { name: "Ankit", cont: "95407XXXXX" };
  return (
    <div>
      <h1 class = "App">Welcome to home page</h1>
      <Contact myinfo = { info } />
    </div>
  )
}

export default Home
