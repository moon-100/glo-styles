import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store'
import App from './App'
import GlobalStyle from './styles/global-style'
import ModalProvider from './providers/modal.provider'
import AuthProvider from './providers/auth.provider'

import reportWebVitals from './reportWebVitals'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <AuthProvider>
      <ModalProvider>
        <GlobalStyle />
        <App />
      </ModalProvider>
    </AuthProvider>
  </Provider>,
)

reportWebVitals()
