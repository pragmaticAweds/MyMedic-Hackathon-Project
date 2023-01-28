import React from "react";
import "./LogInStyles.scss";
import AuthLayout from "../../templates/auth-layout";
import MyMedicLogo from "../../components/atoms/vectors/Logo";
import Input from "../../components/atoms/Input";
import Button from "../../components/atoms/button";
import { useState } from "react";
import { Link } from "react-router-dom";

const LogInPage = () => {
  const [loginPayload, setLoginPayload] = useState({
    email: "",
    password: "",
  });
  const handleInputField = (e) => {
    const { name, value } = e.target;
    setLoginPayload((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <AuthLayout imgUrl="/img/signup3.webp" imgAlt="A smilling doctor">
      <div className="login-container scrollbar-hide">
        <MyMedicLogo />
        <h2>Patients Log in</h2>
        <form onClick={(e) => e.preventDefault()}>
          <div className="form-stage-container">
            {/* email and password*/}
            <div className="flex flex-col gap-y-12 mb-6">
              <Input
                label="Email address"
                placeholder="Enter your email address or PSID:<Patient State ID>"
                name="email"
                onChange={handleInputField}
                value={loginPayload.email}
              />

              <Input
                type="password"
                label="Password"
                placeholder="Enter your password"
                name="password"
                onChange={handleInputField}
                value={loginPayload.password}
              />
            </div>

            <Button
              label="Login"
              mxWt="max-w-full"
              isDisabled={!loginPayload.email | loginPayload.password}
            />

            <Link to="/signup">
              <div className="login-btn-container">
                <span className=" login-btn-or">or</span>
                <span className="absolute h-[0.1rem] w-full bg-[#6666663f] "></span>
              </div>
              <div className="sign-up-container">
                <span>Don't have an account?</span>
                <span className="text-[#0075FA]">Sign up</span>
              </div>
            </Link>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};
export default LogInPage;
