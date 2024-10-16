import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ResearchPage from "./pages/ResearchPage";
import PublicationPage from "./pages/PublicationPage";
import ExperiencePage from "./pages/ExperiencePage";
import AcademicPage from "./pages/AcademicPage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<HomePage />} path="/" exact />
        <Route element={<HomePage />} path="/home" />
        <Route element={<ResearchPage />} path="/research" />
        <Route element={<PublicationPage />} path="/publication" />
        <Route element={<ExperiencePage />} path="/experience" />
        <Route element={<AcademicPage />} path="/education-awards" />
        <Route element={<ResumePage />} path="/resume" />
        <Route element={<ContactPage />} path="/contact" />
      </Routes>
    </>
  );
}

export default App;
