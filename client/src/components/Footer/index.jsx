import { Row, Col } from "antd";
import "./Footer.scss";

import img1 from "../../assets/images/bo-cong-thuong-2.png";
import img2 from "../../assets/images/bo-cong-thuong.svg";
import img3 from "../../assets/images/dmca_protected_sml_120y.png";
import img4 from "../../assets/images/Screenshot 2024-10-19 100252.png";
import img5 from "../../assets/images/e71563afb23e3f34a148fe1b7d3413c5.png";
import img6 from "../../assets/images/appstore.png";
import img8 from "../../assets/images/qrcode.png";
import img7 from "../../assets/images/playstore.png";
import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="section">
          <div className="list">
            <div>
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
            </div>
            <div>
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
            </div>
            <div>
              <h5>Hợp tác và liên kết</h5>
              <ul>
                <li>Quy chế hoạt động Sàn GDTMĐT</li>
                <li>Bán hàng cùng Tiki</li>
              </ul>
              <h5>Chứng nhận bởi</h5>
              <ul className="list-image">
                <li>
                  <a href="https://hotro.tiki.vn/s/?_gl=1*17om930*_gcl_au*MTAzNzA2NjMxOC4xNzI4ODk4NjYx*_ga*NjQ5MjQxODguMTcyODg5ODY1Nw..*_ga_S9GLR1RQFJ*MTcyOTI1NDgwOS4xOC4xLjE3MjkyNTUxMzUuMTYuMC4w">
                    <img src={img1} alt="" />
                  </a>
                </li>
                <li>
                  <a href="http://online.gov.vn/Home/WebDetails/21193">
                    <img src={img2} alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://www.dmca.com/Protection/Status.aspx?ID=388d758c-6722-4245-a2b0-1d2415e70127&refurl=https://tiki.vn/checkout/cart">
                    <img src={img3} alt="" />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5>Phương thức thanh toán</h5>
              <img src={img4} alt="" />
              <h5>Dịch vụ giao hàng</h5>
              <img src={img5} alt="" className="tikinow-image" />
            </div>
            <div>
              <h5>Kết nối với chúng tôi</h5>

              <div className="facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </div>
              <div className="youtube">
                <i className="fa-brands fa-youtube"></i>
              </div>

              <h5>Tải ứng dụng trên điện thoại</h5>
              <div className="application">
                <img src={img8} alt="" />
                <div>
                  <img src={img6} alt="" />
                  <img src={img7} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Row className="section">
          <Col span={24}>
            <h5>Công ty TNHH TI KI</h5>
            <p>
              Tòa nhà số 52 đường Út Tịch, Phường 4, Quận Tân Bình, Thành phố Hồ
              Chí Minh
              <br />
              Giấy chứng nhận đăng ký doanh nghiệp số 0309532909 do Sở Kế Hoạch
              và Đầu Tư Thành phố Hồ Chí Minh cấp lần đầu vào ngày 06/01/2010.
              <br />
              Hotline: 1900 6035
            </p>
          </Col>
        </Row>
        <Row className="section">
          <Col span={24}>
            <h5>Tiki - Thật nhanh, thật chất lượng, thật rẻ</h5>
            <p>
              <h6>Tiki có tất cả</h6>
              Với hàng triệu sản phẩm từ các thương hiệu, cửa hàng uy tín, hàng
              nghìn loại mặt hàng từ Điện thoại smartphone tới Rau củ quả tươi,
              kèm theo dịch vụ giao hàng siêu tốc TikiNOW, Tiki mang đến cho bạn
              một trải nghiệm mua sắm online bắt đầu bằng chữ tín. Thêm vào đó,
              ở Tiki bạn có thể dễ dàng sử dụng vô vàn các tiện ích khác như mua
              thẻ cào, thanh toán hoá đơn điện nước, các dịch vụ bảo hiểm.
            </p>
            <p>
              <h6>Khuyến mãi, ưu đãi tràn ngập</h6>
              Bạn muốn săn giá sốc, Tiki có giá sốc mỗi ngày cho bạn! Bạn là tín
              đồ của các thương hiệu, các cửa hàng Official chính hãng đang chờ
              đón bạn. Không cần săn mã freeship, vì Tiki đã có hàng triệu sản
              phẩm trong chương trình Freeship+, không giới hạn lượt đặt, tiết
              kiệm thời gian vàng bạc của bạn. Mua thêm gói TikiNOW tiết kiệm để
              nhận 100% free ship 2h & trong ngày, hoặc mua gói TikiNOW cao cấp
              để nhận được 100% freeship, áp dụng cho 100% sản phẩm, 100% tỉnh
              thành Việt Nam. Bạn muốn tiết kiệm hơn nữa? Đã có TikiCARD, thẻ
              tín dụng Tiki hoàn tiền 15% trên mọi giao dịch (tối đa hoàn
              600k/tháng)
            </p>
          </Col>
        </Row>
        <Row className="section">
          <Col span={24}>
            <h5>Thương Hiệu Nổi Bật</h5>
            <p>
              vascara / dior / esteelauder / th truemilk / barbie / owen /
              ensure / durex / bioderma / elly / milo / skechers / aldo /
              triumph / nutifood / kindle / nerman / wacom / anessa / yoosee /
              olay / similac / comfort / bitas / shiseido / langfarm / hukan /
              vichy / fila / tsubaki
            </p>
          </Col>
        </Row>
        <div className="section">
          <h5>Danh mục sản phẩm</h5>
          <div className="list">
            <div>
              <div>
                <h6>Đồ Chơi - Mẹ & Bé</h6>
                <p>
                  Thời Trang Cho Mẹ Và Bé / Đồ chơi / Đồ dùng cho bé / Chăm sóc
                  nhà cửa / Chăm sóc mẹ mang thai, sau sinh / Dinh dưỡng cho bé
                  / Tã, Bỉm / Dinh dưỡng cho người lớn / Dinh dưỡng cho mẹ /
                  Thực phẩm ăn dặm / Chuẩn bị mang thai
                </p>
              </div>
              <div>
                <h6>Thực Phẩm Tươi Sống</h6>
                <p>
                  Trái Cây / Thịt, Trứng / Cá, thuỷ hải sản / Rau củ quả / Thực
                  phẩm Việt / Sữa, bơ, phô mai / Đông lạnh, mát / Dầu ăn, gia vị
                  / Gạo, mì, nông sản / Đồ hộp, đóng gói / Bia, đồ uống / Thực
                  phẩm chay / Dành cho trẻ em / Bánh kẹo, giỏ quà / Thức ăn, đồ
                  thú cưng / Chăm sóc cá nhân / Chăm sóc nhà cửa
                </p>
              </div>
              <div>
                <h6>Điện Thoại - Máy Tính Bảng</h6>
                <p>
                  Điện thoại Smartphone / Điện thoại bàn / Điện thoại phổ thông
                  / Máy đọc sách / Máy tính bảng
                </p>
              </div>
              <div>
                <h6>Làm Đẹp - Sức Khỏe</h6>
                <p>
                  Chăm sóc da mặt / Dụng cụ làm đẹp / Thực phẩm chức năng /
                  Trang điểm / Chăm sóc cơ thể / Máy Massage & Thiết bị chăm sóc
                  sức khỏe / Sản phẩm thiên nhiên & Khác / Chăm sóc tóc và da
                  đầu / Chăm sóc cá nhân / Nước hoa / Hỗ trợ tình dục / Bộ sản
                  phẩm làm đẹp / Dược mỹ phẩm
                </p>
              </div>
              <div>
                <h6>Điện Gia Dụng</h6>
                <p>Đồ dùng nhà bếp / Thiết bị gia đình</p>
              </div>
            </div>
            <div>
              <div>
                <h6>Thời trang nữ</h6>
                <p>
                  Áo nữ / Đầm nữ / Quần nữ / Áo liền quần - Bộ trang phục / Áo
                  khoác nữ / Đồ ngủ - Đồ mặc nhà nữ / Chân váy / Trang phục bơi
                  nữ / Thời trang bầu và sau sinh / Thời trang trung niên
                </p>
              </div>
              <div>
                <h6>Thời trang nam</h6>
                <p>
                  Áo thun nam / Quần nam / Áo vest - Áo khoác nam / Áo sơ mi nam
                  / Đồ lót nam / Áo hoodie nam / Đồ ngủ, đồ mặc nhà nam / Đồ đôi
                  - Đồ gia đình nam / Áo nỉ - Áo len nam / Đồ bơi - Đồ đi biển
                  nam / Quần áo nam trung niên / Quần áo nam kích cỡ lớn
                </p>
              </div>
              <div>
                <h6>Giày - Dép nữ</h6>
                <p>
                  Giày cao gót / Dép - Guốc nữ / Giày thể thao nữ / Giày sandals
                  nữ / Giày búp bê / Giày boots nữ / Giày lười nữ / Phụ kiện
                  giày / Giày Đế xuồng nữ
                </p>
              </div>
              <div>
                <h6>Giày - Dép nam</h6>
                <p>
                  Giày lười nam / Giày tây nam / Giày thể thao nam / Dép nam /
                  Giày sandals nam / Phụ kiện giày nam / Giày boots nam
                </p>
              </div>
              <div>
                <h6>Túi thời trang nữ</h6>
                <p>
                  Túi đeo chéo, túi đeo vai nữ / Ví nữ / Túi xách tay nữ / Túi
                  tote nữ / Phụ kiện túi
                </p>
              </div>
              <div>
                <h6>Túi thời trang nam</h6>
                <p>
                  Ví nam / Túi đeo chéo nam / Túi xách công sở nam / Túi bao tử,
                  túi đeo bụng
                </p>
              </div>
            </div>
            <div>
              <div>
                <h6>Balo và Vali</h6>
                <p>
                  Balo / Túi du lịch và phụ kiện / Balo, cặp, túi chống sốc
                  laptop / Vali, phụ kiện vali
                </p>
              </div>
              <div>
                <h6>Phụ kiện thời trang</h6>
                <p>
                  Phụ kiện thời trang nữ / Mắt kính / Phụ kiện thời trang nam
                </p>
              </div>
              <div>
                <h6>Đồng hồ và Trang sức</h6>
                <p>
                  Trang sức / Đồng hồ nữ / Đồng hồ nam / Phụ kiện đồng hồ / Đồng
                  hồ trẻ em
                </p>
              </div>
              <div>
                <h6>Laptop - Máy Vi Tính - Linh kiện</h6>
                <p>
                  Linh Kiện Máy Tính - Phụ Kiện Máy Tính / Thiết Bị Văn Phòng -
                  Thiết Bị Ngoại Vi / Thiết Bị Mạng / Thiết Bị Lưu Trữ / PC -
                  Máy Tính Bộ / Laptop
                </p>
              </div>
              <div>
                <h6>Nhà Cửa - Đời Sống</h6>
                <p>
                  Trang trí nhà cửa / Dụng cụ nhà bếp / Sửa chữa nhà cửa / Ngoài
                  trời & sân vườn / Nội thất / Đèn & thiết bị chiếu sáng / Đồ
                  dùng và thiết bị nhà tắm / Đồ dùng phòng ăn / Đồ dùng phòng
                  ngủ / Đồ thờ cúng / Nhạc cụ / Hoa tươi và cây cảnh
                </p>
              </div>
              <div>
                <h6>Bách Hóa Online</h6>
                <p>
                  Chăm sóc thú cưng / Đồ uống - Pha chế dạng bột / Thực phẩm
                  Đóng hộp và Khô / Gia Vị và Chế Biến / Đậu & Hạt Các Loại / Đồ
                  Ăn Vặt / Sữa và các Sản phẩm từ sữa / Đồ Uống Không Cồn / Đồ
                  uống có cồn / Bộ quà tặng
                </p>
              </div>
            </div>
            <div>
              <div>
                <h6>Hàng Quốc Tế</h6>
                <p>
                  Nhà Cửa - Đời Sống / Thời Trang / Ô tô, xe máy, xe đạp / Thiết
                  Bị Số - Phụ Kiện Số / Thể thao - Dã ngoại / Làm Đẹp - Sức Khỏe
                  / Sách, Văn phòng phẩm & Quà lưu niệm / Mẹ & Bé / Điện gia
                  dụng / Bách hóa online / Máy Ảnh - Máy Quay Phim / Laptop &
                  Máy Vi Tính / Sản phẩm - thiết bị công nghiệp / Tivi & Thiết
                  Bị Nghe Nhìn / Điện Thoại - Máy Tính Bảng
                </p>
              </div>
              <div>
                <h6>Thiết Bị Số - Phụ Kiện Số</h6>
                <p>
                  Phụ Kiện Điện Thoại và Máy Tính Bảng / Phụ kiện máy tính và
                  Laptop / Thiết Bị Âm Thanh và Phụ Kiện / Thiết Bị Thông Minh
                  và Linh Kiện Điện Tử / Thiết Bị Đeo Thông Minh và Phụ Kiện /
                  Thiết Bị Chơi Game và Phụ Kiện
                </p>
              </div>
              <div>
                <h6>Voucher - Dịch vụ</h6>
                <p>
                  Thanh toán hóa đơn / Khóa học / Du lịch - Khách sạn / Spa &
                  Làm đẹp / Dịch vụ khác / Nhà hàng - Ăn uống / Sự kiện - Giải
                  trí / Nha khoa - Sức khỏe / Phiếu quà tặng / Sim số - Thẻ cào
                  - Thẻ game
                </p>
              </div>
              <div>
                <h6>Ô Tô - Xe Máy - Xe Đạp</h6>
                <p>
                  Phụ kiện - Chăm sóc xe / Xe điện / Xe đạp / Xe máy / Ô tô / Xe
                  Scooter / Dịch vụ, lắp đặt
                </p>
              </div>
              <div>
                <h6>Nhà Sách Tiki</h6>
                <p>
                  Sách tiếng Việt / Văn phòng phẩm / Quà lưu niệm / English
                  Books
                </p>
              </div>
            </div>
            <div>
              <div>
                <h6>Điện Tử - Điện Lạnh</h6>
                <p>
                  Âm thanh & Phụ kiện Tivi / Phụ kiện điện lạnh / Tủ lạnh / Máy
                  lạnh - Máy điều hòa / Máy giặt / Tủ đông - Tủ mát / Tivi / Máy
                  nước nóng / Máy rửa chén / Máy sấy quần áo / Tủ ướp rượu
                </p>
              </div>
              <div>
                <h6>Thể Thao - Dã Ngoại</h6>
                <p>
                  Trang phục thể thao nữ / Trang phục thể thao nam / Đồ dùng dã
                  ngoại / Giày thể thao nam / Phụ kiện thể thao / Dụng cụ -
                  thiết bị tập thể thao / Các môn thể thao khác / Dụng cụ câu cá
                  / Thể thao dưới nước / Các môn thể thao đồng đội / Các môn thể
                  thao chơi vợt / Các môn thể thao đối kháng / Giày thể thao nữ
                  / Thực phẩm bổ sung năng lượng / Dụng cụ leo núi
                </p>
              </div>
              <div>
                <h6>Máy Ảnh - Máy Quay Phim</h6>
                <p>
                  Phụ Kiện Máy Ảnh, Máy Quay / Camera Giám Sát / Thiết Bị Ánh
                  Sáng / Camera Hành Trình - Action Camera và Phụ Kiện / Balo -
                  Túi Đựng - Bao Da / Ống Kính - Ống Ngắm / Ống Kính (Lens) /
                  Thiết Bị Quay Phim / Máy Bay Camera và Phụ Kiện / Máy Ảnh
                </p>
              </div>
              <div>
                <h6>Từ Khóa Được Quan Tâm</h6>
                <p>
                  máy sưởi / đèn sưởi / quạt tích điện sunhouse / máy sấy tóc
                  philips / bàn ủi hơi nước đứng / bàn là hơi nước philip / may
                  sưởi xiaomi / bình nươc nóng ariston / máy sưởi xiaomi / máy
                  hút bụi giường nệm / cây nước nóng lạnh toshiba / robot hút
                  bụi lau nhà của nhật / đèn sưởi âm trần / nồi cơm điện tefal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Footer);
