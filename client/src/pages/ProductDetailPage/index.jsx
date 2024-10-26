import { Col, Row } from "antd";
import LeftContent from "./LeftContent";
import CenterContent from "./CenterContent";
import RightContent from "./RightContent";
import { useEffect, useState } from "react";

function ProductDetailPage() {

  const [product, setProduct] = useState();
  useEffect(() => {
    fetch("")
      .then(res => res.json())
      .then(data => {
        setProduct(data.product);
      })
  })

  return (
    <>
      <Row gutter={[20]}>
        <Col span={8}>
          <LeftContent />
        </Col>
        <Col span={10}>
          <CenterContent />
        </Col>
        <Col span={6}>
          <RightContent />
        </Col>
      </Row>
    </>
  )
}
export default ProductDetailPage;