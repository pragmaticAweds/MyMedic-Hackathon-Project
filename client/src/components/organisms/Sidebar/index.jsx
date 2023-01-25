import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";

import AppointmentIcon from "../../atoms/vectors/AppointmentIcon";
import DashboardIcon from "../../atoms/vectors/DashboardIcon";
import DoctorIcon from "../../atoms/vectors/DoctorIcon";
import DonationIcon from "../../atoms/vectors/DonationIcon";
import PatientIcon from "../../atoms/vectors/PatientsIcon";
import PaymentIcon from "../../atoms/vectors/PaymentIcon";

import "./SidebarStyle.scss";
const SideBar = () => {
  const { pathname } = useLocation();
  const currentPath = pathname.split("/")[1];

  const sidebarLink = [
    {
      label: "Overview",
      icon: (
        <DashboardIcon color={currentPath === "overview" ? "#336CFB" : ""} />
      ),
      path: "/overview",
    },
    {
      label: "Appointments",
      icon: (
        <AppointmentIcon
          color={currentPath === "appointment" ? "#336CFB" : ""}
        />
      ),
      path: "/appointment",
    },
    {
      label: "Patients",
      icon: <PatientIcon color={currentPath === "patient" ? "#336CFB" : ""} />,
      path: "/patient",
    },
    {
      label: "Doctors",
      icon: <DoctorIcon color={currentPath === "doctor" ? "#336CFB" : ""} />,
      path: "/doctor",
    },
    {
      label: "Donations",
      icon: (
        <DonationIcon color={currentPath === "donation" ? "#336CFB" : ""} />
      ),
      path: "/donation",
    },
    {
      label: "Payments",
      icon: <PaymentIcon color={currentPath === "payment" ? "#336CFB" : ""} />,
      path: "/payment",
    },
  ];

  return (
    <div className="sidebar-container">
      {sidebarLink.map(({ icon, label, path }, i) => (
        <Link
          to={path}
          key={`sidebar-${label}`}
          className={clsx(
            path.includes(currentPath) ? "bg-[#E9F3FF]" : "bg-transparent",
            "sidebar-link"
          )}
        >
          <span
            className={clsx(
              path.includes(currentPath) ? "sidebar-active" : "hidden"
            )}
          ></span>
          <span>{icon}</span>
          <span
            className={clsx(
              "font-medium text-lg",
              path.includes(currentPath) ? "text-[#336CFB]" : "text-[#52575C]"
            )}
          >
            {label}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
