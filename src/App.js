import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import ThankPage from './components/ThankPage'


const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/thank-you" Component={ThankPage} />
      </Routes>
    </BrowserRouter>
  )
}

export default App