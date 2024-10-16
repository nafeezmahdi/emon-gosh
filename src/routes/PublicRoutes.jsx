import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function PublicRoutes() {
  return (
    <>
      <div>
        <Header />
      </div>
      <>
        <div className="main">
          <Outlet />
        </div>
      </>
    </>
  );
}
