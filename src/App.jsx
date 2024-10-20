import { useState } from 'react'
import './App.css'
import { GithubUser } from './GithubUser'
import { GithubUsers } from './GithubUsers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GithubUsers/>
    </>
  )
}

export default App
