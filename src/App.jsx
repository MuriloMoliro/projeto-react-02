import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [totalTimeInseconds, setTotalTimeInSeconds] = useState((15 * 60))

const minutes = Math.floor (totalTimeInseconds / 60)
const seconds = totalTimeInseconds % 60

useEffect(() => {
  if (totalTimeInseconds === 0) {
    alert("O tempo acabou!!")
    return
  } else {
  setTimeout(() => {
    setTotalTimeInSeconds(totalTimeInseconds - 1)
  }, 1000)
  
  }
}, [totalTimeInseconds])

  return (
    <div>
      <span>{minutes.toString().padStart(2, "0")}</span>
      <span>:</span>
      <span>{seconds.toString().padStart(2, "0")}</span>
    </div>
  );
}

export default App
