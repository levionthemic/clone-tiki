import { Row, Col } from "antd";
import SiderCategoryPage from "../../components/Sider/SiderCategoryPage";
import ContentCategoryPage from "../../components/Content/ContentCategoryPage";
import { memo, useEffect, useState } from "react";
import CategoryContext from "./CategoryContext";
import { useParams } from "react-router-dom";

function CategoryPage() {

  const [menuItem, setMenuItem] = useState([]);
  const categoryId = parseInt(useParams().categoryId);

  useEffect(() => {
    fetch("http://localhost:3002/api/v1/categories/" + categoryId)
      .then((res) => res.json())
      .then((data) => {
        setMenuItem(data.data);
      });
  }, [categoryId]);

  return (
    <CategoryContext.Provider value={{ menuItem, setMenuItem }}>
      <Row>
        <Col span={4}>
          <SiderCategoryPage />
        </Col>
        <Col span={19} offset={1}>
          <ContentCategoryPage />
        </Col>
      </Row>
    </CategoryContext.Provider>
  );
}

export default memo(CategoryPage);
