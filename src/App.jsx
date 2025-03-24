import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Web from './Web'
import Room from './Room'

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Web/>}></Route>
        <Route path='/room/:id' element={<Room/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
