import { Badge, Col, Row } from "antd";
import {
  HomeFilled,
  ShoppingCartOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import SearchBox from "./SearchBox";
import "./Header.scss";
import { memo } from "react";
import { useDispatch } from "react-redux";
import { openPhoneNumber } from "../../redux/slices/loginModalSlice";
import Login from "../../pages/Login";
import { useNavigate } from "react-router-dom";

const arr = [
  "điện gia dụng",
  "xe cộ",
  "mẹ & bé",
  "khỏe đẹp",
  "nhà cửa",
  "sách",
  "thể thao",
];

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCartClick = () => {
    let isLogin = false;
    const arr = document.cookie.split("; ");
    for (const item of arr) {
      const [key] = item.split("=");
      if (key === "token") {
        isLogin = true;
      }
    }
    if (!isLogin) {
      dispatch(openPhoneNumber());
    } else {
      navigate("/cart")
    }
  };

  return (
    <>
      {/* Section 1 */}
      <header>
        <div className="container">
          <Row className="header-1" gutter={[50, 20]}>
            <Col
              className="header-1__icon"
              span={3}
              onClick={() => navigate("/")}
            >
              <img
                src="https://salt.tikicdn.com/ts/upload/0e/07/78/ee828743c9afa9792cf20d75995e134e.png"
                alt="Logo"
              />
              <span>Tốt & Nhanh</span>
            </Col>
            <Col span={21}>
              <Row className="header-1__row1 my-2">
                <Col span={16}>
                  <SearchBox />
                </Col>
                <Col span={8}>
                  <div className="header-1__row1__list">
                    <div onClick={() => { navigate("/")}}>
                      <HomeFilled style={{ fontSize: "20px" }} />
                      <span style={{ paddingLeft: "10px" }}>Trang chủ</span>
                    </div>
                    <div onClick={() => dispatch(openPhoneNumber())}>
                      <SmileOutlined style={{ fontSize: "20px" }} />
                      <span style={{ paddingLeft: "5px" }}>Tài khoản</span>
                    </div>
                    <Login />
                    <div></div>
                    <div onClick={handleCartClick}>
                      <Badge count={0} showZero offset={[5, -5]}>
                        <ShoppingCartOutlined className="icon-cart" />
                      </Badge>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="header-1__row2 my-2">
                <Col span={16} className="header-1__row2__list">
                  {arr.map((item, index) => {
                    return (
                      <a href="/" key={index}>
                        {item}
                      </a>
                    );
                  })}
                </Col>
                <Col span={8}>
                  <div className="header-1__row2__address">
                    <div>
                      <FontAwesomeIcon icon={faLocationDot} />
                      <span>Giao đến: </span>
                    </div>
                    <p>Q. 1, P. Bến Nghé, Hồ Chí Minh</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </header>

      {/* Section 2 */}
      <header>
        <div className="container">
          <div className="header-2">
            <h5 className="header-2__title">Cam kết</h5>
            <ul className="header-2__list">
              <li key={1}>
                <img
                  src="https://salt.tikicdn.com/ts/upload/96/76/a3/16324a16c76ee4f507d5777608dab831.png"
                  alt=""
                />
                <span>100% hàng thật</span>
              </li>
              <li key={2}>
                <img
                  src="https://salt.tikicdn.com/ts/upload/11/09/ec/456a2a8c308c2de089a34bbfef1c757b.png"
                  alt=""
                />
                <span>Freeship mọi đơn</span>
              </li>
              <li key={3}>
                <img
                  src="https://salt.tikicdn.com/ts/upload/0b/f2/19/c03ae8f46956eca66845fb9aaadeca1e.png"
                  alt=""
                />
                <span>Hoàn 200$ nếu hàng giả</span>
              </li>
              <li key={4}>
                <img
                  src="https://salt.tikicdn.com/ts/upload/3a/f4/7d/86ca29927e9b360dcec43dccb85d2061.png"
                  alt=""
                />
                <span>30 ngày đổi trả</span>
              </li>
              <li key={5}>
                <img
                  src="https://salt.tikicdn.com/ts/upload/87/98/77/fc33e3d472fc4ce4bae8c835784b707a.png"
                  alt=""
                />
                <span>Giao nhanh 2h</span>
              </li>
              <li key={6}>
                <img
                  src="https://salt.tikicdn.com/ts/upload/6a/81/06/0675ef5512c275a594d5ec1d58c37861.png"
                  alt=""
                />
                <span>Giá siêu rẻ</span>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default memo(Header);
