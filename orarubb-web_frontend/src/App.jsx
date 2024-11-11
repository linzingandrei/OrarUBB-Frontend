import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import MainPage from './pages/MainPage/MainPage'
import AllTeachersPage from './pages/AllTeachersPage/AllTeachersPage'
import AllRoomsPage from './pages/AllRoomsPage/AllRoomsPage'
import AllCoursesPage from './pages/AllCoursesPage/AllCoursesPage'


const AppContent = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path='/teachers' element={<AllTeachersPage/>} />
      <Route path='/rooms' element={<AllRoomsPage/>} />
      <Route path='/courses' element={<AllCoursesPage/>} />
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
