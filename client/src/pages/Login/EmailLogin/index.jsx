import { useSelector, useDispatch } from "react-redux";
import {
  closeEmail,
  openForgotPassword,
  openPhoneNumber,
  openSignUp,
} from "../../../redux/slices/loginModalSlice";

import { CustomModal } from "../style";
import { memo, useState } from "react";
import CloseIcon from "../CloseIcon";
import "./EmailLogin.scss";

function EmailLogin() {
  const isModalOpen = useSelector((state) => state.isOpenLoginModal.email);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const handleGoBack = (e) => {
    dispatch(closeEmail());
    dispatch(openPhoneNumber());
  };

  return (
    <>
      <CustomModal
        open={isModalOpen}
        onOk={() => dispatch(closeEmail())}
        onCancel={() => dispatch(closeEmail())}
        width={800}
        footer={null}
        closeIcon={<CloseIcon />}
      >
        <div className="inner-wrap-email">
          <div className="inner-content">
            <div className="inner-goback" onClick={handleGoBack}>
              <img
                src="https://salt.tikicdn.com/ts/upload/0b/43/2f/7c7435e82bce322554bee648e748c82a.png"
                alt=""
              />
            </div>
            <div className="inner-form">
              <h2>Đăng nhập bằng email</h2>
              <p>Nhập email và mật khẩu tài khoản Tiki</p>
              <form onSubmit={handleSubmit} method="POST" action="">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control my-4"
                    placeholder="acb@gmail.com"
                    onChange={handleChangeEmail}
                    value={email}
                    required
                  />
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Mật khẩu"
                    onChange={handleChangePassword}
                    value={password}
                    required
                  />
                  <button type="submit" className="btn">
                    Đăng nhập
                  </button>
                </div>
              </form>
            </div>
            <div className="inner-options">
              <div className="forgot-password">
                <span
                  onClick={() => {
                    dispatch(closeEmail());
                    dispatch(openForgotPassword());
                  }}
                >
                  Quên mật khẩu
                </span>
              </div>
              <div className="signin">
                {" "}
                Chưa có tài khoản?{" "}
                <span
                  onClick={() => {
                    dispatch(closeEmail());
                    dispatch(openSignUp());
                  }}
                >
                  Tạo tài khoản
                </span>
              </div>
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

export default memo(EmailLogin);
