import { Col, Row } from "antd";
import Header from "../../components/Header";
import { Footer } from "antd/es/layout/layout";
import SiderRoutes from "../../components/RoutesComponent/SiderRoutes";
import ContentRoutes from "../../components/RoutesComponent/ContentRoutes";

function DefaultLayout() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Row>
            <Col span={5}>
              <SiderRoutes />
            </Col>
            <Col span={19}>
              <ContentRoutes />
            </Col>
          </Row>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default DefaultLayout;