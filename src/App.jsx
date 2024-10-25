import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ResearchPage from "./pages/ResearchPage";
import PublicationPage from "./pages/PublicationPage";
// import AcademicPage from "./pages/AcademicPage";
import ResumePage from "./pages/ResumePage";
import PublicRoutes from "./routes/PublicRoutes";
import NewsPage from "./pages/NewsPage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route element={<HomePage />} path="/" exact />
          <Route element={<HomePage />} path="/home" />
          <Route element={<NewsPage />} path="/news" />
          <Route element={<ResearchPage />} path="/research" />
          <Route element={<PublicationPage />} path="/publications" />
          {/* <Route element={<AcademicPage />} path="/education" /> */}
          <Route element={<ResumePage />} path="/resume" />
        </Route>
      </Routes>
    </>
  );
}

export default App;
