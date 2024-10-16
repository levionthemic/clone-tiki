import { Col, Row } from "antd";
import Content from "../../components/Content";
import Header from "../../components/Header";
import Sider from "../../components/Sider";

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Row>
            <Col span={5}>
              <Sider />
            </Col>
            <Col span={19}>
              <Content />
            </Col>
          </Row>
        </div>
      </main>
    </>
  );
}

export default HomePage;
