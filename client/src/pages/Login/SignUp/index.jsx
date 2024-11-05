import React, { memo, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { closeSignUp, openEmail } from "../../../redux/slices/loginModalSlice";
import "./SignUp.scss";
import CloseIcon from "../CloseIcon";
import { CustomModal } from "../style";

function SignUp() {
  const isModalOpen = useSelector((state) => state.isOpenLoginModal.signup);
  const dispatch = useDispatch();

  const [ phoneNumber, setPhoneNumber ] = useState("");

  const handleChangeInput = (e) => {
    setPhoneNumber(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  const handleGoBack = (e) => {
    dispatch(closeSignUp());
    dispatch(openEmail());
  }

  return (
    <>
      <CustomModal
        open={isModalOpen}
        onOk={() => dispatch(closeSignUp())}
        onCancel={() => dispatch(closeSignUp())}
        width={800}
        footer={null}
        closeIcon={<CloseIcon />}
      >
        <div className="inner-wrap-signup">
          <div className="inner-content">
            <div className="inner-goback" onClick={handleGoBack}>
              <img src="https://salt.tikicdn.com/ts/upload/0b/43/2f/7c7435e82bce322554bee648e748c82a.png" alt="" />
            </div>
            <div className="inner-form">
              <h2>Tạo tài khoản</h2>
              <p>Vui lòng nhập số điện thoại</p>
              <form onSubmit={handleSubmit} method="POST" action="">
                <div className="form-group">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Số điện thoại"
                    onChange={handleChangeInput}
                    value={phoneNumber}
                    minLength={10}
                    maxLength={10}
                    required
                  />
                  <button type="submit" className="btn">
                    Tiếp tục
                  </button>
                </div>
              </form>
            </div>
            <div className="inner-options">
              <div className="inner-title">
                <h5>Hoặc tiếp tục bằng</h5>
              </div>
              <div className="inner-icons">
                <img
                  src="https://salt.tikicdn.com/ts/upload/3a/22/45/0f04dc6e4ed55fa62dcb305fd337db6c.png"
                  alt=""
                />
                <img
                  src="https://salt.tikicdn.com/ts/upload/1c/ac/e8/141c68302262747f5988df2aae7eb161.png"
                  alt=""
                />
              </div>
              <p>
                Bằng việc tiếp tục, bạn đã đọc và đồng ý với điều khoản sử dụng
                và Chính sách bảo mật thông tin cá nhân của Tiki
              </p>
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
export default memo(SignUp);
