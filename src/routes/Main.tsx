import Submission from '@/pages/Submission'
import CreateSubmission from '@/pages/Submission/Create'

export const MainRoutes = [
  {
    path: '/',
    element: <Submission />
  },
  {
    path: '/submission',
    element: <Submission />
  },
  {
    path: '/submission/new',
    element: <CreateSubmission />
  }
]
