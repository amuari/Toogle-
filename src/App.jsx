import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Toogle from './Toogle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Toogle />
    </div>
  )
}

export default App
