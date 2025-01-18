import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MsalProvider } from "@azure/msal-react";
import { msalInstance } from "./utils/authenticationConfig.js";
import "./App.scss";
import LandingPage from "./pages/LandingPage/LandingPage";
import InformatiiSaliPage from "./pages/InformatiiSaliPage/InformatiiSali";
import AllTeachersPage from "./pages/AllTeachersPage/AllTeachersPage";
import AllRoomsPage from "./pages/AllRoomsPage/AllRoomsPage";
import AllCoursesPage from "./pages/AllCoursesPage/AllCoursesPage";
import ProfessorsSchedule from "./pages/ProfessorsSchedule/ProfessorsSchedule";
import MainPage from "./pages/MainPage/MainPage";
import StudyProgramsPage from "./pages/StudyProgramsPage/StudyProgramsPage";
import GroupsSchedule from "./pages/GroupsSchedule/GroupsSchedule";
import RoomsSchedule from "./pages/RoomsSchedule/RoomsSchedule";
import UserSchedule from "./pages/UserSchedule/UserSchedule";
import CrudSchedule from "./pages/UserSchedule/CrudSchedule";
import RoomsAvailabilityPage from "./pages/RoomsAvailabilityPage/RoomsAvailabilityPage";
import LegendaSalilorPage from "./pages/LegendaSalilorPage/LegendaSalilorPage";
import { AuthProvider } from "./utils/AuthContext.jsx";
import { Provider } from "react-redux";
import { store, persistor } from "./api/Persistence.js";
import { PersistGate } from "redux-persist/integration/react";
import CoursesSchedule from "./pages/CoursesSchedule/CoursesSchedule.jsx";

const AppContent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/informatii-sali" element={<InformatiiSaliPage />} />
        <Route
          path="informatii-sali/legenda"
          element={<LegendaSalilorPage />}
        />
        <Route path="/teachers" element={<AllTeachersPage />} />
        <Route path="/rooms" element={<AllRoomsPage />} />
        <Route path="/courses" element={<AllCoursesPage />} />
        <Route path="/teacher/:teacherCode" element={<ProfessorsSchedule />} />
        <Route
          path="/course/:courseCode"
          element={<CoursesSchedule></CoursesSchedule>}
        />
        <Route path="/" element={<MainPage />} />
        <Route path="/study-programs" element={<StudyProgramsPage />} />
        <Route
          path="/group/:abbreviation/:groupYear"
          element={<GroupsSchedule />}
        />
        <Route path="/room/:roomName" element={<RoomsSchedule />} />

        <Route path="/crud-schedule" element={<CrudSchedule />} />
        <Route path="/my-schedule" element={<UserSchedule />} />
        <Route
          path="/rooms/rooms-schedule"
          element={<RoomsAvailabilityPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

function App() {
  return (
    <MsalProvider instance={msalInstance}>
      <AuthProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppContent />
          </PersistGate>
        </Provider>
      </AuthProvider>
    </MsalProvider>
  );
}

export default App;
