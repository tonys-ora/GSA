import { RouterProvider } from 'react-router-dom'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { DialogProvider } from '@/context/DialogProvider'
import { SocketProvider } from '@/context/SocketProvider'
import routes from '@/routes'

import Dialogs from '@/components/Core/Dialogs'

import { ThemedToastContainer } from './components/Core/ThemedToastContainer'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000
    }
  }
})

export default function App() {
  return (
    <SocketProvider>
      <QueryClientProvider client={queryClient}>
        <DialogProvider>
          <RouterProvider router={routes} />
          <ThemedToastContainer />
          <Dialogs />
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </DialogProvider>
      </QueryClientProvider>
    </SocketProvider>
  )
}
