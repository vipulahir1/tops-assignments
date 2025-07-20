import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Fruitnames from './fruitnames'
import Listofuser from './Listofuser'
import Form from './Form'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Fruitnames />
    <Listofuser />
    <Form />
    </>
  )
}

export default App
