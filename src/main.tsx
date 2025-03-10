import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyle, defaultTheme } from './styles'
import { ThemeProvider } from 'styled-components'
import React from 'react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
