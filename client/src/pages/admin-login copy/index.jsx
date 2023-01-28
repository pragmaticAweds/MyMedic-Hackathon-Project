import React from "react";
import "./AdminStyles.scss";
import AuthLayout from "../../templates/auth-layout";
import MyMedicLogo from "../../components/atoms/vectors/Logo";
import Input from "../../components/atoms/Input";
import Button from "../../components/atoms/button";
import { useState } from "react";

import "../login/LogInStyles.scss";

const AdminloginPage = () => {
  const [adminLoginPayload, setadminLoginPayload] = useState({
    email: "",
    password: "",
  });
  const handleInputField = (e) => {
    const { name, value } = e.target;
    setadminLoginPayload((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <AuthLayout>
      <div className="login-container scrollbar-hide">
        <MyMedicLogo />
        <h2>Admin Portal</h2>
        <form onClick={(e) => e.preventDefault()}>
          <div className="form-stage-container">
            {/* email and password*/}
            <div className="flex flex-col gap-y-12 mb-6">
              <Input
                label="Email"
                placeholder="Enter your first name"
                name="email"
                onChange={handleInputField}
                value={adminLoginPayload.email}
              />

              <Input
                type="password"
                label="Password"
                placeholder="Enter your password"
                name="password"
                onChange={handleInputField}
                value={adminLoginPayload.password}
              />
            </div>

            <Button
              label="Login"
              mxWt="max-w-full"
              isDisabled={
                !adminLoginPayload.email | !adminLoginPayload.password
              }
            />
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};
export default AdminloginPage;
