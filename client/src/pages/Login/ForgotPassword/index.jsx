import React, { memo, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  closeForgotPassword,
  openEnterPassword,
} from "../../../redux/slices/loginModalSlice";
import "./ForgotPassword.scss";
import CloseIcon from "../CloseIcon";
import { CustomModal } from "../style";

function ForgotPassword() {
  const isModalOpen = useSelector(
    (state) => state.isOpenLoginModal.forgotPassword
  );
  const dispatch = useDispatch();

  const [inputContent, setInputContent] = useState("");

  const handleChangeInput = (e) => {
    setInputContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const handleGoBack = (e) => {
    dispatch(closeForgotPassword());
    dispatch(openEnterPassword());
  }

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
        <div className="inner-wrap-forgot-password">
          <div className="inner-content">
            <div className="inner-goback" onClick={handleGoBack}>
              <img
                src="https://salt.tikicdn.com/ts/upload/0b/43/2f/7c7435e82bce322554bee648e748c82a.png"
                alt=""
              />
            </div>
            <div className="inner-form">
              <h2 className="mb-3">Quên mật khẩu ?</h2>
              <p className="mb-4">Vui lòng nhập thông tin tài khoản để lấy lại mật khẩu</p>
              <form onSubmit={handleSubmit} method="POST" action="">
                <div className="form-group">
                  <input
                    type={"tel" || "email"}
                    className="form-control"
                    placeholder="Số điện thoại/Email"
                    onChange={handleChangeInput}
                    value={inputContent}
                    required
                  />
                  <button type="submit" className="btn">
                    Lấy lại mật khẩu
                  </button>
                </div>
              </form>
            </div>
            <div className="inner-options"></div>
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
export default memo(ForgotPassword);
