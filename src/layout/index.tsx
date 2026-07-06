import Box from '@mui/material/Box'
import { Outlet } from 'react-router-dom'

import Footer from './Footer'
import Header from './Header'
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
