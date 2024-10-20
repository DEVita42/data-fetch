import { useState } from 'react'
import './App.css'
import { GithubUser } from './GithubUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GithubUser/>
    </>
  )
}

export default App
