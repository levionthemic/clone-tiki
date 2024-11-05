import React, { memo, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  closeEnterPassword,
  closeForgotPassword,
  openForgotPassword,
  openPhoneNumber,
} from "../../../redux/slices/loginModalSlice";
import "./EnterPassword.scss";
import CloseIcon from "../CloseIcon";
import { CustomModal } from "../style";

function EnterPassword() {
  const isModalOpen = useSelector(
    (state) => state.isOpenLoginModal.enterPassword
  );
  const dispatch = useDispatch();

  const [password, setPassword] = useState("");

  const handleChangeInput = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const handleGoBack = (e) => {
    dispatch(closeEnterPassword());
    dispatch(openPhoneNumber());
  };

  return (
    <>
      <CustomModal
        open={isModalOpen}
        onOk={() => dispatch(closeForgotPassword())}
        onCancel={() => dispatch(closeForgotPassword())}
        width={800}
        footer={null}
        closeIcon={<CloseIcon />}
      >
        <div className="inner-wrap-enter-password">
          <div className="inner-content">
            <div className="inner-goback" onClick={handleGoBack}>
              <img
                src="https://salt.tikicdn.com/ts/upload/0b/43/2f/7c7435e82bce322554bee648e748c82a.png"
                alt=""
              />
            </div>
            <div className="inner-form">
              <h2>Nhập mật khẩu</h2>
              <p className="mb-3">
                Vui lòng nhập mật khẩu Tiki của số điện thoại ...
              </p>
              <form onSubmit={handleSubmit} method="POST" action="">
                <div className="form-group">
                  <input
                    type={"tel" || "email"}
                    className="form-control"
                    placeholder="Mật khẩu"
                    onChange={handleChangeInput}
                    value={password}
                    required
                  />
                  <button type="submit" className="btn">
                    Lấy lại mật khẩu
                  </button>
                </div>
              </form>
            </div>
            <div className="inner-options">
              <span
                onClick={() => {
                  dispatch(closeEnterPassword());
                  dispatch(openForgotPassword());
                }}
              >
                Quên mật khẩu
              </span>
              <span
                onClick={() => {
                  dispatch(closeEnterPassword());
                  dispatch(openPhoneNumber());
                }}
              >
                Đăng nhập bằng SMS
              </span>
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
export default memo(EnterPassword);
