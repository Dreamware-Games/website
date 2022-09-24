import React from 'react';

import { Route, Routes } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'

import { Home } from './pages/Home'
import { Games } from './pages/Games'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { NotFound } from './pages/NotFound'

import { MenuBar } from './components/Menubar'
import { Footer } from './components/Footer'

export const App = () => {
  return (
    <>
      <Router>
        <MenuBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/games' element={<Games />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}