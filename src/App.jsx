import MainRoutes from './routes'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800
    })
  }, [])

  return <MainRoutes />
}

export default App
