import { Col, Row } from "antd";
import SiderHomePage from "../../components/Sider/SiderHomePage";
import ContentHomePage from "../../components/Content/ContentHomePage";

function HomePage() {
  return (
    <div>
      <Row>
        <Col span={4}>
          <SiderHomePage />
        </Col>
        <Col span={19} offset={1}>
          <ContentHomePage />
        </Col>
      </Row>
    </div>
  );
}

export default HomePage;
