
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/01_header/Header.js'
import Section from './components/02_section/Section.js'
import Footer from './components/03_footer/Footer.js'
import Nav from './components/01_header/Nav.js'
import NotFound from './components/NotFound.js'

import Japan from './components/02_section/countries/Japan.js'
import Italy from './components/02_section/countries/Italy.js'
import Canada from './components/02_section/countries/Canada.js'
import Hawaii from './components/02_section/countries/Hawaii.js'

import Assets from './components/03_footer/Assets.js'
import assetData from './components/03_footer/data/assetData.js'

import './main.scss'

export default function App() {

  //List of Copyright links
  let assets = assetData.map((asset) => {
    return (
      <Assets
        key={asset.id}
        desc={asset.desc}
        link={asset.link}
      />
    )
  })
  
  return (
    <>


      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <>
              <Header />
              <Section />
              <Footer />
            </>
          } />
          <Route path='/destinations' element={<Nav />}>
            <Route path='japan' element={<Japan />} />
            <Route path='italy' element={<Italy />} />
            <Route path='canada' element={<Canada />} />
            <Route path='hawaii' element={<Hawaii />} />
          </Route>
          <Route path='assets' element={
            <div className='assetCont'>
              <Nav />
              {assets}
            </div>
          } />
          <Route path='*' element={
            <>
              <Nav />
              <NotFound />
            </>
          } />

        </Routes>
      </BrowserRouter>
    </>
  )
}
