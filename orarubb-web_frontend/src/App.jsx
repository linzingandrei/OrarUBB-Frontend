import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import MainPage from './pages/MainPage/MainPage'
import StudyProgramsPage from './pages/MainPage/StudyProgramsPage/StudyProgramsPage'
import GroupsSchedule from './pages/MainPage/GroupsSchedule/GroupsSchedule'

const AppContent = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/study" element={<StudyProgramsPage />} />
      <Route path="/groups" element={<GroupsSchedule />} />
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
