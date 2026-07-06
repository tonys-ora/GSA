import * as ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import StyledEngineProvider from '@mui/material/StyledEngineProvider'
import { PersistGate } from 'redux-persist/integration/react'

import App from './App'
import reportWebVitals from './reportWebVitals'
import { persister, store } from './store'
import { AppTheme } from './theme'

import 'keen-slider/keen-slider.min.css'
import 'react-lazy-load-image-component/src/effects/blur.css'
import 'simplebar-react/dist/simplebar.min.css'
import './index.css'

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement!)

root.render(
  // <StrictMode>
  <StyledEngineProvider injectFirst>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <AppTheme>
          <App />
        </AppTheme>
      </PersistGate>
    </Provider>
  </StyledEngineProvider>
  // </StrictMode>
)

reportWebVitals()
