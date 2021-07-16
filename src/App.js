import React, { useState } from 'react'
import './App.css';
import Header from './components/Header'
import UserList from './components/UsersList'


function App() {
  const [data, setData] = useState([])

  const agregarUser = (user) => {
    setData(oldData => [...oldData, user])
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header data={data} agregarUser={agregarUser}/>
        <UserList data={data} />
      </header>
    </div>
  );
}

export default App;
