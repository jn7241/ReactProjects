import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

const persons = [
  {
    id:1,
    name: 'Arto Hellas',
    phone: '19-2168-112'
  },

  {
    id:2,
    name:'Jim William',
    phone: '123-4567-891'
  }
]


ReactDOM.createRoot(document.getElementById('root')).render(
  <App persons={persons} />
)