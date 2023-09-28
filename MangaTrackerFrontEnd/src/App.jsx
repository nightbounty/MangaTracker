import { useState } from 'react'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddManga from './mangas/AddManga';
import EditManga from './mangas/EditManga';
import ViewManga from './mangas/ViewManga';

function App() {

  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addmanga" element={<AddManga />} />
          <Route exact path="/editmanga/:title" element={<EditManga />} />
          <Route exact path="/viewmanga/:title" element={<ViewManga />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
