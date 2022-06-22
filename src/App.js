import logo from './logo.svg';
import './App.css';

import React from 'react'
//This is the app module.
function App() {
  const[thingsArray,setThingsArray] = React.useState(["Thing 1", "Thing 2"])
function handleClick(){
  setThingsArray(prevThingsArray => {
    return[...prevThingsArray,`Thing ${prevThingsArray.length+1}`]
  })
}
const thingsOfElements = thingsArray.map(thing => <p key = {thing} >{thing}</p>)
  return (
    <div className="App">
      <header className="App-header">
        
        <button type='submit' onClick ={handleClick}> Add Thing </button>
        <p className='thing--para'>{thingsOfElements}</p>
        
    </header>
    </div>
  )
}

export default App;
