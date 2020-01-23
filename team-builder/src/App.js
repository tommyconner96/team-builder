import React, { useState } from 'react'
import Form from './components/Form'
import Members from './components/Members'
import './App.css';


function App() {
  const [team, setTeam]= useState([
    {
    name: "Tommy Conner",
    email: "tommyconner96@fakeemail.com",
    role: "Web Dev"
  },
  {
    name: "James Fakenamington",
    email: "james@fakeemail.com",
    role: "Web Dev"
  },

  ])

  
  const addUser = user => {
    const newMember ={
      name: user.name,
      email: user.email,
      role: user.role
    }
    const newmembersArray = [...team, newMember];
    setTeam(newmembersArray);
  }
  return (
    <div className="App">
      <h1>Team Members:</h1>
      <Form addUser={addUser}/>
      <Members team={team} />

    </div>
  )
}


export default App;
