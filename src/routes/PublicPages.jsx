


import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthPage from '../pages/auth/AuthPage'
import Login from '../pages/auth/logIn'
import Register from '../pages/auth/Register'

const PublicPages = () => {
  return (
    <Routes>
      <Route path='/auth' element={<AuthPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='*' element={<AuthPage/>}/>
    </Routes>
  )
}

export default PublicPages