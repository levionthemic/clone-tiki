import Rating from "react-rating";
import "./TopDealProductItem.scss";
import { Typography } from "antd";
import React from "react";

const { Paragraph } = Typography;

const priceToString = (price) => {
  const str = `${price}`;
  if (str.length <= 6)
    return (
      str.slice(0, str.length - 3) +
      "." +
      str.slice(str.length - 3, str.length)
    );
  return (
    str.slice(0, str.length - 6) +
    "." +
    str.slice(str.length - 6, str.length - 3) +
    "." +
    str.slice(str.length - 3, str.length)
  );
};

function TopDealProductItem({ item }) {
  return (
    <div>
      <div
        className="card"
        style={{ maxWidth: 200, margin: "5px", aspectRatio: "1/2" }}
      >
        <img className="card-img-top" src={item.thumbnail_url} alt="" />
        <div className="card-body">
          <div>
            <Paragraph
              ellipsis={{ rows: 2, tooltip: `${item.name}` }}
              id="title"
            >
              {item.name}
            </Paragraph>
            <Rating
              emptySymbol="fa-regular fa-star"
              fullSymbol="fa-solid fa-star"
              initialRating={item["rating_average"]}
              readonly
            />
            <div id="price">{priceToString(item.price)}<sup>đ</sup></div>
            <span id="discount">-{item.discount_rate}%</span>
            <span id="old-price">{priceToString(item.original_price)}<sup>đ</sup></span>
          </div>
          <div id="note">
            <span>Giao thứ 4, 23/10</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(TopDealProductItem);
