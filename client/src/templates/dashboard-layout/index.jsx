import clsx from "clsx";
import AppointmentIcon from "../../components/atoms/vectors/AppointmentIcon";
import Navbar from "../../components/organisms/Navbar";
import SideBar from "../../components/organisms/Sidebar";
import "./DashboardLayoutStyles.scss";

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-main">
      <Navbar />
      <div className="dashboard-sub-container">
        <SideBar />
        <div className="dashboard-children">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
