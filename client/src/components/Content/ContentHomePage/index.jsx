import { memo, useEffect, useState } from "react";
import Slider from "react-slick";
import { ImageSlide, SlideItem, SliderStyled } from "./style";
import "./ContentHomePage.scss";
import TopDealProductItem from "./TopDealProductItem";

function ContentHomePage() {
  const [topDeals, setTopDeals] = useState(
    JSON.parse(localStorage.getItem("topDeals"))
  );

  const slickList = [
    "https://salt.tikicdn.com/ts/tikimsp/67/77/dd/76accf2c5efc56e9c8c06299c4258af5.jpg",

    "https://salt.tikicdn.com/ts/tikimsp/9f/7b/ee/404a95b682593049527f3ed8cde28184.jpg",

    "https://salt.tikicdn.com/ts/tikimsp/8a/6e/75/90a13eea4a20405603842ce4b624472a.png",

    "https://salt.tikicdn.com/ts/tikimsp/17/af/1f/1355a35fc4a8370d23666c999301bf68.png",

    "https://salt.tikicdn.com/ts/tikimsp/68/24/15/16c70a7f5c917d63292c91e53f9ed0ba.png",

    "https://salt.tikicdn.com/ts/tikimsp/31/8a/05/4c6fdd3810d947244665bc1064826cc0.png",
  ];

  const quickLinks = [
    {
      name: "TOP DEAL",
      name_color: "#D93843",
      thumbnail_url:
        "https://salt.tikicdn.com/ts/upload/2f/52/8e/00ab5fbea9d35fcc3cadbc28d7c6b14e.png",
      url: "https://tiki.vn/khuyen-mai/hero-top-san-pham-ban-chay",
    },
    {
      name: "Siêu Sale Tháng 10",
      thumbnail_url:
        "https://salt.tikicdn.com/ts/upload/64/cd/79/e93d0cacad10cca9f80824f99a8e36e0.png",
      url: "https://tiki.vn/khuyen-mai/sieu-sale-1010",
    },
    {
      name: "Vòng Quay Tri Ân",
      thumbnail_url:
        "https://salt.tikicdn.com/ts/upload/67/92/68/00aeeda190357c6c36a028b0d38c0e6e.png",
      url: "https://tiki.vn/slot-machine",
    },
    {
      name: "Tiki Nhìn lại 14 năm",
      thumbnail_url:
        "https://salt.tikicdn.com/ts/upload/ce/35/85/7aadb962661d07bab355c4084337203c.png",
      url: "https://tiki.vn/tiki-lookback",
    },
    {
      name: "Tiki Trading",
      thumbnail_url:
        "https://salt.tikicdn.com/ts/upload/72/8d/23/a810d76829d245ddd87459150cb6bc77.png",
      url: "https://tiki.vn/cua-hang/tiki-trading",
    },
    {
      name: "Cùng mẹ chăm bé",
      thumbnail_url:
        "https://salt.tikicdn.com/cache/750x750/ts/upload/d7/b9/cf/185c3ea4d118574d7927f3d191575445.jpg",
      url: "https://tiki.vn/khuyen-mai/tiki-mom-club-cham-soc-be-cung-tiki-tips",
    },
    {
      name: "Mọt sách Tiki",
      thumbnail_url:
        "https://salt.tikicdn.com/cache/750x750/ts/upload/28/52/b2/e77e55676a38e02c5ac7242cc43f46dc.jpg",
      url: "https://tiki.vn/khuyen-mai/mot-sach-tiki",
    },
    {
      name: "Thế giới công nghệ",
      thumbnail_url:
        "https://salt.tikicdn.com/cache/750x750/ts/upload/25/a7/1f/5538b19e95600da86e1241082fb631bf.jpg",
      url: "https://tiki.vn/khuyen-mai/tech-arena",
    },
    {
      name: "Yêu bếp nghiện nhà",
      thumbnail_url:
        "https://salt.tikicdn.com/cache/750x750/ts/upload/03/f9/44/343e3b73c1e600e3c16b97843dc04bb1.jpg",
      url: "https://tiki.vn/khuyen-mai/yeu-bep-nghien-nha-giam-den-50-100-chinh-hang",
    },
    {
      name: "Khỏe đẹp toàn diện",
      thumbnail_url:
        "https://salt.tikicdn.com/cache/750x750/ts/upload/ea/d3/81/a4ed0166b6abb19c3cfa3a48fadafd02.jpg",
      url: "https://tiki.vn/khuyen-mai/khuyen-mai-hot-lam-dep-suc-khoe",
    },
  ];

  useEffect(() => {
    if (!localStorage.getItem("topDeals")) {
      fetch("http://localhost:8001/content-top-deal")
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
          {slickList.map((item, index) => (
            <SlideItem key={index}>
              <ImageSlide src={item} alt="" />
            </SlideItem>
          ))}
        </Slider>
      </div>
      <div className="content__quicklink">
        {quickLinks.map((item, index) => (
          <>
            <div className="content__quicklink-item" key={index}>
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
          {topDeals ? (
            <SliderStyled
              infinite
              speed={500}
              slidesToShow={6}
              slidesToScroll={6}
            >
              {topDeals.map((item, index) => (
                <TopDealProductItem item={item} key={index} />
              ))}
            </SliderStyled>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
export default memo(ContentHomePage);
