import { Row, Col, Breadcrumb } from "antd";
import SiderCategoryPage from "../../components/Sider/SiderCategoryPage";
import ContentCategoryPage from "../../components/Content/ContentCategoryPage";
import { memo, useEffect, useRef, useState } from "react";
import CategoryContext from "./CategoryContext";
import { Link, useParams } from "react-router-dom";

function CategoryPage() {
  const [menuItem, setMenuItem] = useState([]);
  const menuTitle = useRef("");
  const breadcrumbItem = useRef([]);
  const categoryId = parseInt(useParams().categoryId);

  useEffect(() => {
    fetch("http://localhost:8001/api/v1/categories/" + categoryId)
      .then((res) => res.json())
      .then((data) => {
        menuTitle.current = data.data.title;
        breadcrumbItem.current = data.breadcrumb;
        setMenuItem(data.data.data);
      });
  }, [categoryId]);

  function itemRender(currentRoute, params, items, paths) {
    const isLast = currentRoute?.path === items[items.length - 1]?.path;

    return isLast ? (
      <span>{currentRoute.title}</span>
    ) : (
      <Link to={currentRoute.path}>{currentRoute.title}</Link>
    );
  }

  return (
    <CategoryContext.Provider value={{ menuItem, setMenuItem }}>
      <Breadcrumb itemRender={itemRender} items={breadcrumbItem.current} separator=">" style={{ color: "#808089", padding: "10px 0" }} />
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
