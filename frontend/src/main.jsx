import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-em453hyn6kw4hl0x.us.auth0.com"
    clientId="0TNbrACtfNtDh1AhhxtWXZFEg6juFl11"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
 
    <App />
    </Auth0Provider>
  
)
