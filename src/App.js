import React from 'react';

import { Route, Routes } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'


import { Home } from './pages/Home'
import { Games } from './pages/Games'
import { About } from './pages/About'
import { NotFound } from './pages/NotFound'

import { MenuBar } from './components/Menubar'


export const App = () => {

  return (
    <>
      <Router>
        <MenuBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/games' element={<Games />} />
          <Route exact path='/about' element={<About />} />
          <Route element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}