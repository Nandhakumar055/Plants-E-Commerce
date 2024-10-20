import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'

import './App.css'


const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Home} />
        {/* <Route exact path="/" Component={Footer} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App