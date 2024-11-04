import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Row, Col, Breadcrumb } from "antd";
import ProductItem from "../../components/ProductItem";
import "./SearchPage.scss";

function SearchPage() {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  console.log(keyword);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await axios.get(
        "http://localhost:8001/api/v1/products/search",
        {
          params: {
            keyword: keyword,
          },
        }
      );
      if (response.data.code === 200) {
        console.log(response.data);
        setProducts(response.data.data);
      }
    };
    fetchApi();
  }, [keyword]);

  const item = [
    {
      title: (
        <a href="/" style={{ textDecoration: "none" }}>
          Trang chủ
        </a>
      ),
    },
    {
      title: `Kết quả tìm kiếm "${keyword}"`,
    },
  ];

  return (
    <>
      <Breadcrumb
        items={item}
        separator=">"
        style={{ color: "#808089", padding: "10px 0" }}
      />
      {products && (
        <>
          <Row>
            <Col span={22}>
              <div className="inner-filters">
                <h2>Bộ lọc</h2>
              </div>
              <div className="inner-wrap mt-4">
                {products.map((item) => (
                  <ProductItem
                    item={item}
                    key={item._id}
                    className="inner-item"
                  />
                ))}
              </div>
            </Col>
          </Row>
        </>
      )}
    </>
  );
}
export default SearchPage;
