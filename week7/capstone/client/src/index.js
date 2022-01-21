import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Provider from './context/Provider'
import App from './App'
import './css/style.css'

ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider>
          <App/>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>, 
  document.getElementById('root')
)
