import Rating from "react-rating";
import "./CenterContent.scss";
import { memo } from "react";
import { List } from "antd";

const priceToString = (price) => {
  const str = `${price}`;
  if (str.length <= 6)
    return (
      str.slice(0, str.length - 3) + "." + str.slice(str.length - 3, str.length)
    );
  return (
    str.slice(0, str.length - 6) +
    "." +
    str.slice(str.length - 6, str.length - 3) +
    "." +
    str.slice(str.length - 3, str.length)
  );
};

function CenterContent({ product }) {
  return (
    <>
      {product && (
        <div className="center-content">
          <div className="section__main">
            {product["brand_name"] ? (
              <div className="section__main-brand">
                Thương hiệu: {product["brand_name"]}
              </div>
            ) : (
              <></>
            )}

            <div className="section__main-name">{product["name"]}</div>
            <div className="section__main-star">
              <div>
                <span>{product["rating_average"]}</span>
                <Rating
                  emptySymbol="fa-regular fa-star"
                  fullSymbol="fa-solid fa-star"
                  initialRating={product["rating_average"]}
                  readonly
                />
                <span>({product["review_count"]})</span>
              </div>
              <div>|</div>
              <div>
                {product["quantity_sold"]
                  ? product["quantity_sold"].text
                  : "Đã bán 0"}
              </div>
            </div>
            <div className="section__main-price">
              <span>
                {priceToString(product["price"])}
                <sup>₫</sup>
              </span>
              <span>-{product["discount_rate"]}%</span>
              <span>
                {priceToString(product["original_price"])}
                <sup>₫</sup>
              </span>
            </div>
          </div>

          <div className="section__info">
            <div>Thông tin vận chuyển</div>
            <div>
              <div> Giao đến Q. 1, P. Bến Nghé, Hồ Chí Minh</div>
              <div>Đổi</div>
            </div>
          </div>

          <div className="section__warranty">
            <div>Thông tin bảo hành</div>
          </div>

          <div className="section__specification">
            <div>Thông tin chi tiết</div>
            {product.specifications && (
              <List
                itemLayout="horizontal"
                dataSource={product.specifications[0].attributes}
                renderItem={(item) => (
                  <List.Item style={{ padding: "8px" }}>
                    <div style={{ color: "#808089", width: "60%" }}>
                      {item.name}
                    </div>
                    <div style={{ width: "40%" }}>{item.value}</div>
                  </List.Item>
                )}
              />
            )}
          </div>

          <div className="section__desc">
            <div>Mô tả sản phẩm</div>
            <p
              dangerouslySetInnerHTML={{ __html: product.description }}
              style={{ textAlign: "justify" }}
            ></p>
          </div>
        </div>
      )}
    </>
  );
}

export default memo(CenterContent);
