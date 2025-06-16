import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BlogList from './components/BlogList'
import BlogView from './components/BlogView'
import NotFound from './components/NotFound'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/blog/:blogId" element={<BlogView />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
