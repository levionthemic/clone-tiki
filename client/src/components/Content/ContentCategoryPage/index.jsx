import { useContext, useEffect, useState } from "react";
import "./ContentCategoryPage.scss";
import CategoryContext from "../../../pages/CategoryPage/CategoryContext";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import ProductItem from "../../ProductItem";

function ContentCategoryPage({ menuTitle }) {
  const { menuItem } = useContext(CategoryContext);
  const categoryId = parseInt(useParams().categoryId);

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(`http://localhost:8002/api/v1/products`, {
        params: {
          categoryId: categoryId,
        },
      });
      setProductList(data.data.productList);
    };
    fetchData();
  }, [categoryId]);

  const navigate = useNavigate();

  return (
    <div className="content-category">
      <div className="container">
        <div className="content-category__title">
          <h2>{menuTitle}</h2>
        </div>
        {menuItem && (
          <div className="content-category__category">
            <h5>Khám phá theo danh mục</h5>
            <ul className="content-category__category-list" >
              {menuItem.map((item) => (
                <li key={item.key} onClick={() => navigate(`/categories/${item.key}`)}>
                  <div>
                    <img src={item.thumbnail} alt="" />
                  </div>
                  <p>{item.label}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="content-category__filter">
          <h5>Tất cả sản phẩm</h5>
        </div>

        <div className="content-category__products">
          {productList.map((product) => (
            <ProductItem
              item={product}
              key={product.id}
              className="content-category__products-item"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContentCategoryPage;
