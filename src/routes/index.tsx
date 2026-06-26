import { createBrowserRouter } from 'react-router-dom'

import MainLayout from '@/layout'

import { MainRoutes } from './Main'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      ...MainRoutes
    ]
  }
])

export default routes