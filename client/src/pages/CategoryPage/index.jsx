import { Row, Col } from "antd";
import SiderCategoryPage from "../../components/Sider/SiderCategoryPage";
import ContentCategoryPage from "../../components/Content/ContentCategoryPage";

function CategoryPage() {
  return (
    <>
      <Row>
        <Col span={4}>
          <SiderCategoryPage />
        </Col>
        <Col span={19} offset={1}>
          <ContentCategoryPage />
        </Col>
      </Row>
    </>
  );
}

export default CategoryPage;
