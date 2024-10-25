import { Row, Col, Breadcrumb } from "antd";
import SiderCategoryPage from "../../components/Sider/SiderCategoryPage";
import ContentCategoryPage from "../../components/Content/ContentCategoryPage";
import { memo, useEffect, useRef, useState } from "react";
import CategoryContext from "./CategoryContext";
import { useParams } from "react-router-dom";

function CategoryPage() {
  const [menuItem, setMenuItem] = useState([]);
  const menuTitle = useRef("");
  const breadcrumbItem = useRef([]);
  const categoryId = parseInt(useParams().categoryId);

  useEffect(() => {
    fetch("http://localhost:3002/api/v1/categories/" + categoryId)
      .then((res) => res.json())
      .then((data) => {
        menuTitle.current = data.data.title;
        breadcrumbItem.current = data.breadcrumb;
        setMenuItem(data.data.data);
      });
  }, [categoryId]);


  return (
    <CategoryContext.Provider value={{ menuItem, setMenuItem }}>
      <Breadcrumb items={breadcrumbItem.current} separator=">" style={{ color: "#808089" }} />
      {menuItem ? (
        <Row>
          <Col span={4}>
            <SiderCategoryPage />
          </Col>
          <Col span={19} offset={1}>
            <ContentCategoryPage menuTitle={menuTitle.current} />
          </Col>
        </Row>
      ) : (
        <Row>
          <Col span={24}>
            <ContentCategoryPage menuTitle={menuTitle.current} />
          </Col>
        </Row>
      )}
    </CategoryContext.Provider>
  );
}

export default memo(CategoryPage);
