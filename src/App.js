import React from 'react'
import Form from './componets/Form'
import Showmessage from './componets/Showmessage'
import './index.css'
const App = () => {
  return (
    <div className='container'>
     {localStorage.getItem('shreescore')?<Showmessage/>: <Form />}
     
    </div>
  )
  }

export default App
