import AuthLayout from "../../templates/auth-layout";
import MyMedicLogo from "../../components/atoms/vectors/Logo";
import "./SignupStyles.scss";
import StageLoader from "../../components/molecules/stage-loader";
import { useState } from "react";
import Button from "../../components/atoms/button";
import Input from "../../components/atoms/Input";
import TextArea from "../../components/atoms/text-area";

const SignupPage = () => {
  const [signupStage, setSignupStage] = useState(0);
  const stages = ["General Info", "Health Info", "Medic Info"];

  return (
    <AuthLayout>
      <div className="signup-container">
        <MyMedicLogo />
        <h2>Create an account</h2>
        <StageLoader currentIndex={signupStage} stages={stages} />
        <form>
          {signupStage === 0 ? (
            <div className="form-stage-container">
              {/* first name and last name*/}
              <div className="form-stage">
                <Input label="First Name" placeholder="Enter your first name" />
                <Input label="Last Name" placeholder="Enter your last name" />
              </div>
              <div className="form-stage">
                <Input label="First Name" placeholder="Enter your first name" />
                <Input label="Last Name" placeholder="Enter your last name" />
              </div>
              <div className="form-stage mb-6">
                <Input label="First Name" placeholder="Enter your first name" />
                <Input label="Last Name" placeholder="Enter your last name" />
              </div>
              <div className="mt-6 mb-4">
                <TextArea label="Address" />
              </div>

              <div className="flex  justify-end ">
                <Button label="Next" />
              </div>
            </div>
          ) : signupStage === 1 ? (
            <div className="">
              Form 2
              <Button label="Next" />
            </div>
          ) : signupStage === 2 ? (
            <div className="">
              Form 3
              <Button label="Next" />
            </div>
          ) : null}
        </form>
      </div>
    </AuthLayout>
  );
};

export default SignupPage;
