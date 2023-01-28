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
  const [patientPayload, setPatientPayload] = useState({
    lastName: "",
    firstName: "",
    email: "",
    phoneNo: "",
    password: "",
    confirmPassword: "",
    address: "",
    age: "",
    bloodType: "",
    occupation: "",
    nextOfKin: "",
    nextOfKinNumber: "",
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
    setPatientPayload((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleNextStage = () => {
    setSignupStage((prev) => prev + 1);
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
                    value={patientPayload.firstName}
                  />
                  <Input
                    label="Last Name"
                    placeholder="Enter your last name"
                    name="lastName"
                    onChange={handleInputField}
                    value={patientPayload.lastName}
                  />
                </div>
                {/* email address and phone number*/}

                <div className="form-stage">
                  <Input
                    label="Email Address"
                    placeholder="Enter your email address"
                    name="email"
                    onChange={handleInputField}
                    value={patientPayload.email}
                  />
                  <Input
                    label="Phone Number"
                    placeholder="Enter your phone number"
                    name="phoneNo"
                    onChange={handleInputField}
                    value={patientPayload.phoneNo}
                  />
                </div>
                {/* password and confirm password*/}

                <div className="form-stage mb-6">
                  <Input
                    label="Password"
                    placeholder="Enter your password"
                    name="password"
                    onChange={handleInputField}
                    value={patientPayload.password}
                    type="password"
                  />
                  <Input
                    label="Confirm Password"
                    placeholder="Retype your password"
                    name="confirmPassword"
                    onChange={handleInputField}
                    value={patientPayload.confirmPassword}
                    type="password"
                  />
                </div>
              </div>
              <div className="mt-4 mb-4">
                <TextArea
                  label="Address"
                  placeholder="Enter your current address"
                  name="address"
                  onChange={handleInputField}
                  value={patientPayload.address}
                />
              </div>

              <div className="flex  justify-end ">
                <Button
                  label="Next"
                  isDisabled={
                    !patientPayload.firstName |
                    !patientPayload.lastName |
                    !patientPayload.email |
                    !patientPayload.phoneNo |
                    !patientPayload.password |
                    !patientPayload.confirmPassword |
                    !patientPayload.address
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
                    value={patientPayload.age}
                    placeholder="Enter your age"
                  />
                </div>
                {/* blood type and occupation*/}
                <div className="form-stage">
                  <Input
                    label="Blood Type"
                    placeholder="Enter your blood type"
                    name="bloodType"
                    value={patientPayload.bloodType}
                    onChange={handleInputField}
                  />
                  <Input
                    label="Occupation"
                    name="occupation"
                    value={patientPayload.occupation}
                    onChange={handleInputField}
                    placeholder="Enter your occupation"
                  />
                </div>
                {/* next of kin full name and next of kin phone number*/}
                <div className="form-stage mb-6">
                  <Input
                    label="Next Of Kin Full Name"
                    name="nextOfKin"
                    value={patientPayload.nextOfKin}
                    onChange={handleInputField}
                    placeholder="Enter the next of kin full name"
                  />
                  <Input
                    label="Next of Kin Phone Number"
                    name="nextOfKinNumber"
                    value={patientPayload.nextOfKinNumber}
                    onChange={handleInputField}
                    placeholder="Enter the next of kin phone number"
                  />
                </div>
              </div>
              <div className="mt-4">
                <TextArea
                  label="Allergies"
                  name="allergies"
                  value={patientPayload.allergies}
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
                    !patientPayload.age |
                    !patientPayload.occupation |
                    !patientPayload.bloodType |
                    !patientPayload.nextOfKin |
                    !patientPayload.nextOfKin |
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
                  value={patientPayload.currentIllness}
                  onChange={handleInputField}
                  placeholder="Enter your current illness"
                  suffix='Please enter your current illness seperated by " , "'
                />

                <TextArea
                  label="Current Medication"
                  name="currentMedication"
                  value={patientPayload.currentMedication}
                  onChange={handleInputField}
                  placeholder="Enter your current medication"
                  suffix='Please enter your current medication seperated by " , "'
                />

                <TextArea
                  label="Health History"
                  name="healthHistory"
                  value={patientPayload.healthHistory}
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
