import React from 'react'
import "./LogInStyles.scss"
import AuthLayout from "../../templates/auth-layout";
import MyMedicLogo from "../../components/atoms/vectors/Logo";
import Input from '../../components/atoms/Input';
import Button from '../../components/atoms/button';
import { useState } from 'react';

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
      <AuthLayout>
        <div className="login-container scrollbar-hide">
        <MyMedicLogo />
        <h2>Log in</h2>
        <form onClick={(e) => e.preventDefault()}>
        <div className="form-stage-container">
              {/* email and password*/}
              <div className='flex flex-col gap-y-12'>
                <div className='form-stage'>
                  <Input
                    label="Email address"
                    placeholder="Enter your email address"
                    name="email"
                    onChange={handleInputField}
                    value={loginPayload.email}
                    
                  />
                  </div>
                  <div className='mb-[2.875rem]'>
                  <Input type='password' label="Password" placeholder="Enter your password"
                  name="password"
                  onChange={handleInputField}
                  value={loginPayload.password}
                  />
                  </div>
                  </div>
                  
               <div className="flex  justify-center">
                <Button label="Login" mxWt={50} isDisabled={!loginPayload.email |loginPayload.password}/>
              </div>
              <div className=' flex justify-center items-center relative' >
                    <span className='w-[1rem] h-[2rem bg-white p-4 z-10'>or</span>
                    <span className='absolute h-[0.1rem] w-full bg-slate-200 '></span>
                  </div>
                  <div className='border border-[#0075FA] py-2 flex justify-center items-center'  >
                    <span>Don't have an account?</span> 
                    <span className='text-[#0075FA]'>Sign up</span>
                  </div>
            </div>
        </form>
        </div>
        </AuthLayout>
    
              )
}
export default LogInPage;