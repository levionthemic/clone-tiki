import PhoneNumberLogin from "./PhoneNumberLogin";
import EmailLogin from "./EmailLogin";
import OTPConfirm from "./OTPConfirm";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import EnterPassword from "./EnterPassword";

function Login() {
  
  return (
    <>
      <PhoneNumberLogin/> 
      <EmailLogin />
      <OTPConfirm />
      <SignUp />
      <ForgotPassword />
      <EnterPassword />
    </>
  )
}

export default Login;