import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <div className="card">
      <main className="mx-3">
        <Outlet />
      </main>
      </div>
    </>
  )
}

export default App
