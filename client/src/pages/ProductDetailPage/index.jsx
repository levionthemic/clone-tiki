import { Col, Row } from "antd";
import LeftContent from "./LeftContent";
import CenterContent from "./CenterContent";
import RightContent from "./RightContent";
import { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetailPage() {
  const [product, setProduct] = useState({});
  const productId = useParams().productId;

  useEffect(() => {
    fetch(`http://localhost:8002/api/v1/products/detail/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.product);
      });
  }, [productId]);

  return (
    <>
      <Row gutter={[20]}>
        <Col span={8}>
          <LeftContent product={product}/>
        </Col>
        <Col span={10}>
          <CenterContent product={product}/>
        </Col>
        <Col span={6}>
          <RightContent product={product}/>
        </Col>
      </Row>
    </>
  );
}
export default memo(ProductDetailPage);
