import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import * as Sentry from '@sentry/react'

Sentry.init({
  dsn: 'https://1101fd474b7a7054f1499bd166f0b860@o4509008831840256.ingest.de.sentry.io/4509008853794896',
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
