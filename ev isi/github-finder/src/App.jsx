import React from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Users from './components/Users'
import './css/style.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import axios from 'axios'
import { useState } from 'react'

const App = () => {
  const [user, setUser] = useState([]);

  const searchUser = (keyword) => {
    axios.get(`https://api.github.com/search/users?q=${keyword}`)
      .then(res => setUser(res.data.items)
      )
  }
  return (
    <>
      <Header />
      <main>
        <Search comingData={searchUser} />
        <Users senduser={user} />
      </main>
    </>
  )
}

export default App