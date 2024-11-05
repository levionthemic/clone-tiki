import { useSelector, useDispatch } from "react-redux";
import {
  closeOtpConfirm,
  openPhoneNumber,
} from "../../../redux/slices/loginModalSlice";

import { CustomModal } from "../style";
import { memo, useEffect, useState } from "react";
import CloseIcon from "../CloseIcon";
import "./OTPConfirm.scss";

import { InputOTPStyled } from "./style";

function OTPConfirm() {
  const isModalOpen = useSelector(
    (state) => state.isOpenLoginModal.otpConfirm.value
  );
  const phoneNumber = useSelector(
    (state) => state.isOpenLoginModal.otpConfirm.phoneNumber
  );
  const dispatch = useDispatch();

  const [counter, setCounter] = useState(30);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const handleGoBack = (e) => {
    dispatch(closeOtpConfirm());
    dispatch(openPhoneNumber());
  };

  useEffect(() => {
    if (isModalOpen) {
      let intervalId = setInterval(() => {
        setCounter((counter) => {
          if (counter === 0) {
            clearInterval(intervalId);
            // Thực hiện hành động khi đếm ngược kết thúc
            return 0;
          } else {
            return counter - 1;
          }
        });
      }, 1000);
      return () => clearInterval(intervalId);
    } else {
      setCounter(30);
    }
  }, [isModalOpen, counter]);

  return (
    <>
      <CustomModal
        open={isModalOpen}
        onOk={() => dispatch(closeOtpConfirm())}
        onCancel={() => dispatch(closeOtpConfirm())}
        width={800}
        footer={null}
        closeIcon={<CloseIcon />}
      >
        <div className="inner-wrap-otp">
          <div className="inner-content">
            <div className="inner-goback" onClick={handleGoBack}>
              <img
                src="https://salt.tikicdn.com/ts/upload/0b/43/2f/7c7435e82bce322554bee648e748c82a.png"
                alt=""
              />
            </div>
            <div className="inner-form">
              <h2>Nhập mã xác minh</h2>
              <p>
                Số điện thoại <b>{phoneNumber}</b> chưa có tài khoản tại tiki. Vui lòng
                xác thực để tạo tài khoản
              </p>
              <form onSubmit={handleSubmit} method="POST" action="">
                <div className="form-group">
                  <InputOTPStyled />
                  <button type="submit" className="btn">
                    Xác minh
                  </button>
                </div>
              </form>
            </div>
            <div className="inner-options">
              {counter !== 0 ? (
                <>
                  Gửi lại mã sau {counter}s <br />
                  Mã xác minh có hiệu lực trong 15 phút <br />
                </>
              ) : (
                <>
                  Không nhận được? <span>Gửi lại mã</span>
                </>
              )}
            </div>
          </div>

          <div className="inner-decor">
            <div className="inner-decor-flex">
              <div className="inner-image">
                <img
                  src="https://salt.tikicdn.com/ts/upload/eb/f3/a3/25b2ccba8f33a5157f161b6a50f64a60.png"
                  alt=""
                />
              </div>
              <div className="inner-desc">
                <h4>Mua sắm tại Tiki</h4>
                <p>Siêu ưu đãi mỗi ngày</p>
              </div>
            </div>
          </div>
        </div>
      </CustomModal>
    </>
  );
}

export default memo(OTPConfirm);
