import React, { useState } from 'react'
import './App.css';
import Header from './components/Header'
import UserList from './components/UsersList'


function App() {
  const [data, setData] = useState([])

  const agregarUser = (user) => {
    setData(oldData => [...oldData, user])
  }

  const toggleActivo = (id) => {
    const newData = data.map(user => {
      if (user.id === id){
        return{
          ...user,
          activo: !user.activo
        }
      }
      return user
    })
    setData(newData)
  }

  const deleteUser = (id) => {
    const newData = data.filter(user => user.id !== id)
    setData(newData)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header data={data} agregarUser={agregarUser}/>
        <UserList data={data} toggleActivo={toggleActivo} deleteUser={deleteUser}/>
      </header>
    </div>
  );
}

export default App;
