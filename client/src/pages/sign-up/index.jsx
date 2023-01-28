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
  const [signupPayload, setSignupPayload] = useState({
    lastName: "",
    firstName: "",
    email: "",
    phoneNo: "",
    nextOfKin: "",
    nextOfKinNumber: "",
    password: "",
    confirmPassword: "",
    address: "",
    age: "",
    bloodType: "",
    occupation: "",
    allergies: "",
    currentIllness: "",
    currentMedication: "",
    healthHistory: "",
  });

  const [signupStage, setSignupStage] = useState(0);
  const [gender, setGender] = useState("");
  const stages = ["General Info", "Health Info", "Medic Info"];
  const genders = ["male", "female"];
  const handleInputField = (e) => {
    const { name, value } = e.target;
    setSignupPayload((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleNextStage = () => {
    setSignupStage((prev) => prev + 1);
    if (signupStage === 2) return;
  };
  const handlePrevStage = () => {
    setSignupStage((prev) => prev - 1);
  };
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
                    name="firstName"
                    onChange={handleInputField}
                    value={signupPayload.firstName}
                  />
                  <Input
                    label="Last Name"
                    placeholder="Enter your last name"
                    name="lastName"
                    onChange={handleInputField}
                    value={signupPayload.lastName}
                  />
                </div>
                {/* email address and phone number*/}

                <div className="form-stage">
                  <Input
                    label="Email Address"
                    placeholder="Enter your email address"
                    name="email"
                    onChange={handleInputField}
                    value={signupPayload.email}
                  />
                  <Input
                    label="Phone Number"
                    placeholder="Enter your phone number"
                    name="phoneNo"
                    onChange={handleInputField}
                    value={signupPayload.phoneNo}
                  />
                </div>
                {/* password and confirm password*/}

                <div className="form-stage mb-6">
                  <Input
                    type="password"
                    label="Password"
                    placeholder="Enter your password"
                    name="password"
                    onChange={handleInputField}
                    value={patientPayload.password}
                  />
                  <Input
                    type="password"
                    label="Confirm Password"
                    placeholder="Retype your password"
                    name="confirmPassword"
                    onChange={handleInputField}
                    value={patientPayload.confirmPassword}
                  />
                </div>
              </div>
              <div className="mt-4 mb-4">
                <TextArea
                  label="Address"
                  placeholder="Enter your current address"
                  name="address"
                  onChange={handleInputField}
                  value={signupPayload.address}
                />
              </div>

              <div className="flex  justify-end ">
                <Button
                  label="Next"
                  isDisabled={
                    !signupPayload.firstName |
                    !signupPayload.lastName |
                    !signupPayload.email |
                    !signupPayload.phoneNo |
                    !signupPayload.password |
                    !signupPayload.confirmPassword |
                    !signupPayload.address
                  }
                  onClick={handleNextStage}
                />
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
                  <Input
                    label="Age"
                    name="age"
                    value={signupPayload.age}
                    placeholder="Enter your age"
                    onChange={handleInputField}
                  />
                </div>
                {/* blood type and occupation*/}
                <div className="form-stage">
                  <Input
                    label="Blood Type"
                    placeholder="Enter your blood type"
                    name="bloodType"
                    value={signupPayload.bloodType}
                    onChange={handleInputField}
                  />
                  <Input
                    label="Occupation"
                    name="occupation"
                    value={signupPayload.occupation}
                    onChange={handleInputField}
                    placeholder="Enter your occupation"
                  />
                </div>
                {/* next of kin full name and next of kin phone number*/}
                <div className="form-stage mb-6">
                  <Input
                    label="Next Of Kin Full Name"
                    placeholder="Enter the next of kin full name"
                    name="nextOfKin"
                    value={signupPayload.nextOfKin}
                    onChange={handleInputField}
                  />
                  <Input
                    label="Next of Kin Phone Number"
                    name="nextOfKinNumber"
                    value={signupPayload.nextOfKinNumber}
                    onChange={handleInputField}
                    placeholder="Enter the next of kin phone number"
                  />
                </div>
              </div>
              <div className="mt-4">
                <TextArea
                  label="Allergies"
                  name="allergies"
                  value={signupPayload.allergies}
                  onChange={handleInputField}
                  placeholder="Enter your allergies"
                  suffix='Please enter your allergies seperated by " , " '
                />
              </div>
              <div className="flex justify-between mt-8">
                <Button label="prev" onClick={handlePrevStage} />
                <Button
                  label="Next"
                  onClick={handleNextStage}
                  isDisabled={
                    !gender |
                    !patientPayload.age |
                    !patientPayload.occupation |
                    !patientPayload.bloodType |
                    !patientPayload.nextOfKin |
                    !patientPayload.nextOfKinNumber |
                    !patientPayload.allergies
                  }
                />
              </div>
            </div>
          ) : signupStage === 2 ? (
            <div className="w-full">
              <div className="flex flex-col gap-y-16">
                <TextArea
                  label="Current Illness"
                  name="currentIllness"
                  value={signupPayload.currentIllness}
                  onChange={handleInputField}
                  placeholder="Enter your current illness"
                  suffix='Please enter your current illness seperated by " , "'
                />

                <TextArea
                  label="Current Medication"
                  name="currentMedication"
                  value={signupPayload.currentMedication}
                  onChange={handleInputField}
                  placeholder="Enter your current medication"
                  suffix='Please enter your current medication seperated by " , "'
                />

                <TextArea
                  label="Health History"
                  name="healthHistory"
                  value={signupPayload.healthHistory}
                  onChange={handleInputField}
                  placeholder="Enter your health history"
                  suffix='Please enter your health history seperated by " , "'
                />
              </div>

              <div className="flex justify-between mt-8">
                <Button label="prev" onClick={handlePrevStage} />
                <Button label="Sign Up" onClick={handleNextStage} />
              </div>
            </div>
          ) : null}
        </form>
      </div>
    </AuthLayout>
  );
};

export default SignupPage;
