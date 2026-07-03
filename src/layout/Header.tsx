import { memo } from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'
// import Stack from '@mui/material/Stack'
import { Container } from '@mui/material'

// import { useDeviceType, useIsLoggedIn } from '@/hooks'
import Logo from '@/components/Core/Logo'

import { HeaderContainer } from './components/HeaderContainer'

// Main Component
const Header = () => {
  // const location = useLocation()
  // const navigate = useNavigate()
  // const isLoggedIn = useIsLoggedIn()
  // const { isMobile } = useDeviceType()

  return (
    <HeaderContainer>
      <Container>
        <Logo />
      </Container>
    </HeaderContainer>
  )
}

export default memo(Header)
