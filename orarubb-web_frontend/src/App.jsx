import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import MainPage from './pages/MainPage/MainPage'

const AppContent = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
    </BrowserRouter>
  )
}

function App() {
  return (
    <AppContent></AppContent>
  )
}

export default App
