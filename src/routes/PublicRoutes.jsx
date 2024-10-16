import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function PublicRoutes() {
  return (
    <>
      <Header />
      <div id="main" role="main">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}
