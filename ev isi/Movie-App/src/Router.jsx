import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MovieList from './pages/MovieList'
import Dashboard from './pages/Dashboard/Dashboard'
import Header from './layout/Header'
import AddMovie from './pages/Dashboard/movie/AddMovie'
import EditMovie from './pages/Dashboard/movie/EditMovie'
import Login from './pages/Login'

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<MovieList />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/dashboard/add' element={<AddMovie />}></Route>
          <Route path='/dashboard/edit/:slug' element={<EditMovie />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router