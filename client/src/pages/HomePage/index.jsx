import { Col, Row } from "antd";
import SiderHomePage from "../../components/Sider/SiderHomePage";
import ContentHomePage from "../../components/Content/ContentHomePage";

function HomePage() {
  return (
    <>
      <Row>
        <Col span={5}>
          <SiderHomePage />
        </Col>
        <Col span={19}>
          <ContentHomePage />
        </Col>
      </Row>
    </>
  );
}

export default HomePage;
