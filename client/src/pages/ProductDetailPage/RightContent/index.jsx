import { useState } from "react";
import "./RightContent.scss"

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

function RightContent({ product }) {
  const [quantity, setQuantity] = useState(1);

  const handleDesc = (e) => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleInc = () => {
    setQuantity(quantity + 1);
  };

  return (
    <>
      {product && (
        <div className="right-content">
          <div className="inner-quantity">
            <h6>Số lượng</h6>
            <div className="quantity-counter">
              <button className="btn" onClick={handleDesc} disabled={quantity === 1}>
                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-remove.svg" alt="" />
              </button>
              <div>{quantity}</div>
              <button className="btn" onClick={handleInc}>
                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-add.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="inner-price">
            <h5>Tạm tính</h5>
            <h3>{priceToString(product.price)}<sup>₫</sup></h3>
          </div>
          <div className="inner-buttons">
            <button className="buynow-button btn btn-danger">Mua ngay</button>
            <button className="addtocart-button btn btn-outline-primary">Thêm vào giỏ</button>
          </div>
        </div>
      )}
    </>
  );
}

export default RightContent;
