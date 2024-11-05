import { InputOTP } from "antd-input-otp";
import styled from "styled-components";

const Input_OTP = ({ className }) => (
  <div className={className}>
    <InputOTP autoFocus placeholder={"0"} inputType={"numeric"}/>
  </div>
);

export const InputOTPStyled = styled(Input_OTP)`
  display: flex;
  align-items: center;
  justify-content: center;
  
  .input-otp {
    gap: 20px;
  }

  .input-otp__field {
    width: 32px;
    height: 57.8px;
    text-align: center;
    font-size: 30px;
    font-weight: 400;
    border: none;
    border-bottom: 1px solid #ddd;
    margin-bottom: 20px;
    outline: none;
    border-radius: 0px;
    padding: 0;
  }
  .input-otp__field::placeholder {
    color: #ddd;
    font-size: 30px;
    font-weight: 400;
  }

  .input-otp__field:focus {
    border-bottom: 1px solid #0d5cb6;
    box-shadow: none;
  }
`;
