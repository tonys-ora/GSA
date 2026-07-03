import React from 'react'
import { Outlet } from 'react-router-dom'
import Box from '@mui/material/Box'

import Header from './Header'
import Footer from './Footer'
import { MainContent } from './components/MainContent'

export default function index() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>

      <Header />
      
      <MainContent isMobile={false}>
        <Outlet />
      </MainContent>
      <Footer />
    </Box>
  )
}
