import { Row, Col } from "antd";

function Footer() {
  return (
    <>
      <div className="container">
        <Row>
          <Col span={4.8}>
            <h5>Hỗ trợ khách hàng</h5>
            <ul>
              <li>
                Hotline: 1900-6035 <br />
                (1000 đ/phút, 8-21h kể cả T7, CN)
              </li>
              <li>Các câu hỏi thường gặp</li>
              <li>Gửi yêu cầu hỗ trợ</li>
              <li>Hướng dẫn đặt hàng</li>
              <li>Phương thức vận chuyển</li>
              <li>Chính sách kiểm hàng</li>
              <li>Chính sách đổi trả</li>
              <li>Hướng dẫn trả góp</li>
              <li>Chính sách hàng nhập khẩu</li>
              <li>Hỗ trợ khách hàng: hotro@tiki.vn</li>
              <li>Báo lỗi bảo mật: security@tiki.vn</li>
            </ul>
          </Col>
          <Col span={4.8}>
            <h5>Về Tiki</h5>
            <ul>
              <li>Giới thiệu Tiki</li>
              <li>Tiki Blog</li>
              <li>Tuyển dụng</li>
              <li>Chính sách bảo mật thanh toán</li>
              <li>Chính sách bảo mật thông tin cá nhân</li>
              <li>Chính sách giải quyết khiếu nại</li>
              <li>Điều khoản sử dụng</li>
              <li>Giới thiệu Tiki Xu</li>
              <li>Tiếp thị liên kết cùng Tiki</li>
              <li>Bán hàng doanh nghiệp</li>
              <li>Điều kiện vận chuyển</li>
            </ul>
          </Col>
          <Col span={4.8}>
            <h5>Hợp tác và liên kết</h5>
            <ul>
              <li>Quy chế hoạt động Sàn GDTMĐT</li>
              <li>Bán hàng cùng Tiki</li>
            </ul>
            <h5>Chứng nhận bởi</h5>
            <ul>
              <li>
                <a href="https://hotro.tiki.vn/s/?_gl=1*17om930*_gcl_au*MTAzNzA2NjMxOC4xNzI4ODk4NjYx*_ga*NjQ5MjQxODguMTcyODg5ODY1Nw..*_ga_S9GLR1RQFJ*MTcyOTI1NDgwOS4xOC4xLjE3MjkyNTUxMzUuMTYuMC4w">
                  <img
                    src={"../../../public/assets/images/bo-cong-thuong-2.png"}
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="http://online.gov.vn/Home/WebDetails/21193">
                  <img
                    src={"../../../public/assets/images/bo-cong-thuong.svg"}
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="https://www.dmca.com/Protection/Status.aspx?ID=388d758c-6722-4245-a2b0-1d2415e70127&refurl=https://tiki.vn/checkout/cart">
                  <img
                    src={
                      "../../../public/assets/images/dmca_protected_sml_120y.png"
                    }
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </Col>
          <Col span={4.8}></Col>
          <Col span={4.8}></Col>
        </Row>
        <Row>
          <Col span={24}></Col>
        </Row>
        <Row>
          <Col span={24}></Col>
        </Row>
        <Row>
          <Col span={4.8}></Col>
          <Col span={4.8}></Col>
          <Col span={4.8}></Col>
          <Col span={4.8}></Col>
          <Col span={4.8}></Col>
        </Row>
      </div>
    </>
  );
}

export default Footer;
