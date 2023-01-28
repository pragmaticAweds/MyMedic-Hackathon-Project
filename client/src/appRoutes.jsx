import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import AppointmentsPage from "./pages/appointments";
import DoctorsPage from "./pages/doctors";
import DonationsPage from "./pages/donations";
import OverviewPage from "./pages/overview";
import PatientsPage from "./pages/patients";
import PaymentsPage from "./pages/payments";
import SignupPage from "./pages/sign-up";
import LogInPage from "./pages/login";
import AdminloginPage from "./pages/admin-login";
import StaffloginPage from "./pages/staff-login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />

      <Route path="/login" element={<LogInPage />} />
      <Route path="/admin-login" element={<AdminloginPage />} />
      <Route path="/staff-login" element={<StaffloginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/overview" element={<OverviewPage />} />
      <Route path="/patient" element={<PatientsPage />} />
      <Route path="/donation" element={<DonationsPage />} />
      <Route path="/appointment" element={<AppointmentsPage />} />
      <Route path="/doctor" element={<DoctorsPage />} />
      <Route path="/payment" element={<PaymentsPage />} />
    </Routes>
  );
};

export default AppRoutes;
