import React from 'react'
import "./LogInStyles.scss"
import AuthLayout from "../../templates/auth-layout";
import MyMedicLogo from "../../components/atoms/vectors/Logo";

const AdminLogInPage = () => {
    return (
      <AuthLayout>
        <div className="admin-login-container scrollbar-hide">
        <MyMedicLogo />
        <h2>Login</h2>
        <form onClick={(e) => e.preventDefault()}>
        <div className="form-stage-container">
              {/* email and password*/}
              <div className="flex flex-col gap-y-12">
                <div className="form-stage">
                  <Input
                    label="Email"
                    placeholder="Enter your first name"
                  />
                  <Input type='password' label="Password" placeholder="Enter your last name" />
                </div>
                
              </div>
               <div className="flex  justify-end ">
                <Button label="Login" />
              </div>
            </div>
        </form>
        </div>
        </AuthLayout>
    
              )
}
export default AdminLogInPage;