import { memo, useEffect, useState } from "react";
import Slider from "react-slick";
import { ImageSlide, SlideItem, SliderStyled } from "./style";
import "./ContentHomePage.scss";
import TopDealProductItem from "./TopDealProductItem";

function ContentHomePage() {
  const [slickList, setSlickList] = useState(
    JSON.parse(localStorage.getItem("slickList"))
  );
  const [quickLinks, setQuickLinks] = useState(
    JSON.parse(localStorage.getItem("quickLinks"))
  );
  const [topDeals, setTopDeals] = useState(
    JSON.parse(localStorage.getItem("topDeals"))
  );

  useEffect(() => {
    if (!localStorage.getItem("slickList")) {
      fetch("http://localhost:3001/content-slick")
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem(
            "slickList",
            JSON.stringify(data.data[0].banners)
          );
          setSlickList(data.data[0].banners);
        });
    }
    if (!localStorage.getItem("quickLinks")) {
      fetch("http://localhost:3001/content-quick-link")
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("quickLinks", JSON.stringify(data.items));
          setQuickLinks(data.items);
        });
    }
    if (!localStorage.getItem("topDeals")) {
      fetch("http://localhost:3001/content-top-deal")
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("topDeals", JSON.stringify(data.items));
          setTopDeals(data.items);
        });
    }
  }, []);

  // useEffect(() => {
  //   if (topDeals) return;
  //   fetch("http://localhost:3001/content-top-deal")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       localStorage.setItem("topDeals", data.items);
  //       setTopDeals();
  //     });
  // }, [topDeals]);

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
          {slickList ? (
            <>
              {slickList.map((item, index) => {
                return (
                  <SlideItem key={index}>
                    <ImageSlide src={item.image_url} alt="" />
                  </SlideItem>
                );
              })}
            </>
          ) : (
            <></>
          )}
        </Slider>
      </div>
      <div className="content__quicklink">
        {quickLinks ? (
          <>
            {quickLinks.map((item, index) => (
              <>
                <div className="content__quicklink-item" key={index}>
                  <img src={item.thumbnail_url} alt="" />
                  <span>{item.name}</span>
                </div>
              </>
            ))}
          </>
        ) : (
          <></>
        )}
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
          <SliderStyled
            infinite
            speed={500}
            slidesToShow={6}
            slidesToScroll={6}
          >
            {topDeals ? (
              <>
                {topDeals.map((item, index) => {
                  return <TopDealProductItem item={item} key={index} />;
                })}
              </>
            ) : (
              <></>
            )}
          </SliderStyled>

          {/* <Row>
            {topDeals.map((item) => (
              <Col span={4}>
                <TopDealProductItem item={item} />
              </Col>
            ))}
          </Row> */}
        </div>
      </div>
    </div>
  );
}
export default memo(ContentHomePage);
