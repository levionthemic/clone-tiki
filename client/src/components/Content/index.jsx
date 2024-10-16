import { useEffect, useState } from "react";
import Slider from "react-slick";
import { ImageSlide, SlideItem } from "./style";
import "./Content.scss";
import TopDealProductItem from "./TopDealProductItem";
import { Row, Col } from "antd";

function Content() {
  const [slickList, setSlickList] = useState([]);
  const [quickLinks, setQuickLinks] = useState([]);
  const [topDeals, setTopDeals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/content-slick")
      .then((res) => res.json())
      .then((data) => {
        setSlickList(data.data[0].banners);
      });
  });

  useEffect(() => {
    fetch("http://localhost:3001/content-quick-link")
      .then((res) => res.json())
      .then((data) => {
        setQuickLinks(data.items);
      });
  });

  useEffect(() => {
    fetch("http://localhost:3001/content-top-deal")
      .then((res) => res.json())
      .then((data) => {
        setTopDeals(data.items);
      });
  });

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
  };

  return (
    <div className="content">
      <div className="content__carousel">
        <Slider {...settings}>
          {slickList.map((item) => {
            return (
              <SlideItem>
                <ImageSlide src={item.image_url} alt="" />
              </SlideItem>
            );
          })}
        </Slider>
      </div>
      <div className="content__quicklink">
        {quickLinks.map((item) => (
          <>
            <div className="content__quicklink-item">
              <img src={item.thumbnail_url} alt="" />
              <span>{item.name}</span>
            </div>
          </>
        ))}
      </div>
      <div className="content__topdeal">
        <div className="content__topdeal-title">
          <img
            src="https://salt.tikicdn.com/ts/upload/f8/77/0b/0923990ed377f50c3796f9e6ce0dddde.png"
            alt=""
          />
          <span>Xem tất cả</span>
        </div>
        <div className="content__topdeal-content">
          <Row>
            {topDeals.map((item) => (
              <Col>
                <TopDealProductItem item={item} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}
export default Content;
