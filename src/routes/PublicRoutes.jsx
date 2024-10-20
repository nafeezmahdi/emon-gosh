import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function PublicRoutes() {
  return (
    <>
      <Header />
      <div id="main" role="main">
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
