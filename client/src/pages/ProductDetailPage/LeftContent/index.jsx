import "./LeftContent.scss";
import Slider from "react-slick"

function LeftContent({ product }) {
  return (
    <>
      <div className="left-content">
        <div className="inner-image">
          <img
            src={product.images ? product.images[0].thumbnail_url : ""}
            alt=""
          />
        </div>
        <div className="inner-slider">
          <Slider
            infinite
            speed={500}
            slidesToShow={6}
            slidesToScroll={6}
  
          >
            {product.images ? (
              product.images.map((item) => (
                <div className="inner-image-slick">
                  <img src={item.base_url} alt="" />
                </div>
              ))
            ) : (
              <></>
            )}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default LeftContent;
