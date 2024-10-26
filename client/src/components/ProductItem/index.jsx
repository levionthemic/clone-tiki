import "./ProductItem.scss";
import Rating from "react-rating";
import { useNavigate } from "react-router-dom";

function ProductItem({ item }) {
  const navigate = useNavigate();

  if (!item) return <></>;

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

  

  const handleClick = () => {
    navigate(`/products/detail/${item["_id"]}`);
  }

  return (
    <>
      <div
        className="card"
        style={{
          width: "24%",
          borderRadius: "10px",
          border: 0,
          overflow: "hidden",
          aspectRatio: "1 / 2",
          marginBottom: "15px",
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        <img src={item["thumbnail_url"]} className="card-img-top" alt="" />
        <div className="card-body">
          <div className="card__price">
            <div>
              {priceToString(item.price)}
              <sup>₫</sup>
            </div>
            <div>-{item["discount_rate"]}%</div>
          </div>
          <div className="card__brand">{item.brand_name}</div>
          <div className="card__title">{item.name}</div>
          <div className="card__ratingSold">
            <Rating
              emptySymbol="fa-regular fa-star"
              fullSymbol="fa-solid fa-star"
              initialRating={item["rating_average"]}
              readonly
            />
            <div className="divider"></div>
            {item["quantity_sold"] ? (
              <div className="quantity-sold">{item["quantity_sold"].text}</div>
            ) : (
              <div className="quantity-sold">Đã bán 0</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
