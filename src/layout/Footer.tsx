import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Stack, Typography } from '@mui/material'

import { footerList } from '@/constants'

import { FooterContainer } from './components/FooterContainer'

const Footer = () => {

  return (
    <FooterContainer>
      <Container>
        <Stack direction='row'>
          <Typography variant='body2' color='gray' flexGrow={1}>
            © 2024 Southentic, Inc. All rights reserved
          </Typography>
          <Stack direction='row' gap={'24px'} >
            {
              footerList.map((val) => (
                <NavLink to={val.link} key={val.title} style={{textDecoration: 'none'}} >
                  <Typography variant='body2' color='gray'>
                    {val.title}
                  </Typography>
                </NavLink>
              ))
            }
          </Stack>
        </Stack>
      </Container>
    </FooterContainer>
  )
}

export default memo(Footer)
