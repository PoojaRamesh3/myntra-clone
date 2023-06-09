import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <div className={``}>
      {/* <NavBar /> */}
      <Outlet />
    </div>
  );
};

export default Layout;
