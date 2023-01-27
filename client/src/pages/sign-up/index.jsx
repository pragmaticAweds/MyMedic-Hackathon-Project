import AuthLayout from "../../templates/auth-layout";
import MyMedicLogo from "../../components/atoms/vectors/Logo";
import "./SignupStyles.scss";
import StageLoader from "../../components/molecules/stage-loader";
import { useState } from "react";
import Button from "../../components/atoms/button";
import Input from "../../components/atoms/Input";
import TextArea from "../../components/atoms/text-area";
import Select from "../../components/atoms/select";

const SignupPage = () => {
  const [signupStage, setSignupStage] = useState(2);
  const [gender, setGender] = useState("");
  const stages = ["General Info", "Health Info", "Medic Info"];
  const genders = ["male", "female"];
  return (
    <AuthLayout>
      <div className="signup-container scrollbar-hide">
        <MyMedicLogo />
        <h2>Create an account</h2>
        <StageLoader currentIndex={signupStage} stages={stages} />
        <form onClick={(e) => e.preventDefault()}>
          {signupStage === 0 ? (
            <div className="form-stage-container">
              {/* first name and last name*/}
              <div className="flex flex-col gap-y-12">
                <div className="form-stage">
                  <Input
                    label="First Name"
                    placeholder="Enter your first name"
                  />
                  <Input label="Last Name" placeholder="Enter your last name" />
                </div>
                {/* email address and phone number*/}

                <div className="form-stage">
                  <Input
                    label="Email Address"
                    placeholder="Enter your email address"
                  />
                  <Input
                    label="Phone Number"
                    placeholder="Enter your phone number"
                  />
                </div>
                {/* password and confirm password*/}

                <div className="form-stage mb-6">
                  <Input label="Password" placeholder="Enter your password" />
                  <Input
                    label="Confirm Password"
                    placeholder="Retype your password"
                  />
                </div>
              </div>
              <div className="mt-4 mb-4">
                <TextArea
                  label="Address"
                  placeholder="Enter your current address"
                />
              </div>

              <div className="flex  justify-end ">
                <Button label="Next" />
              </div>
            </div>
          ) : signupStage === 1 ? (
            <div className="form-stage-container">
              {/* gender and age*/}
              <div className="flex flex-col gap-y-12">
                <div className="form-stage">
                  <Select
                    label="Gender"
                    placeholder="Please select your gender"
                    options={genders}
                    title={gender}
                    onClick={setGender}
                  />
                  <Input label="Age" placeholder="Enter your age" />
                </div>
                {/* blood type and occupation*/}
                <div className="form-stage">
                  <Input
                    label="Blood Type"
                    placeholder="Enter your blood type"
                  />
                  <Input
                    label="Occupation"
                    placeholder="Enter your occupation"
                  />
                </div>
                {/* next of kin full name and next of kin phone number*/}
                <div className="form-stage mb-6">
                  <Input
                    label="Next Of Kin Full Name"
                    placeholder="Enter the next of kin full name"
                  />
                  <Input
                    label="Next of Kin Phone Number"
                    placeholder="Enter the next of kin phone number"
                  />
                </div>
              </div>
              <div className="mt-4">
                <TextArea
                  label="Allergies"
                  placeholder="Enter your allergies"
                  suffix='Please enter your allergies seperated by " , " '
                />
              </div>
              <div className="flex justify-between mt-8">
                <Button label="prev" /> <Button label="Next" />
              </div>
            </div>
          ) : signupStage === 2 ? (
            <div className="w-full">
              <div className="flex flex-col gap-y-16">
                <TextArea
                  label="Current Illness"
                  placeholder="Enter your current illness"
                  suffix='Please enter your current illness seperated by " , "'
                />

                <TextArea
                  label="Current Medication"
                  placeholder="Enter your current medication"
                  suffix='Please enter your current medication seperated by " , "'
                />

                <TextArea
                  label="Health History"
                  placeholder="Enter your health history"
                  suffix='Please enter your health history seperated by " , "'
                />
              </div>

              <div className="flex justify-between mt-8">
                <Button label="prev" />
                <Button label="Sign Up" />
              </div>
            </div>
          ) : null}
        </form>
      </div>
    </AuthLayout>
  );
};

export default SignupPage;
