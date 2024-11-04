import { SearchOutlined } from "@ant-design/icons";
import "./SearchBox.scss";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

function SearchBox() {
  const navigate = useNavigate();

  const onFocus = () => {
    const input = document.querySelector(".search__input input");
    input.classList.add("focus");

    const searchMask = document.querySelector(".search-mask");
    searchMask.style.display = "block";

    const boxSearch = document.querySelector(".box-search");
    boxSearch.style.display = "block";
  };
  const onBlur = () => {
    const input = document.querySelector(".search__input input");
    input.classList.remove("focus");

    const searchMask = document.querySelector(".search-mask");
    searchMask.style.display = "none";

    const boxSearch = document.querySelector(".box-search");
    boxSearch.style.display = "none";
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    const keyword = e.target.elements[0].value;
    navigate("/search?keyword=" + keyword);
    const input = e.target.elements[0];
    input.blur();
  };

  return (
    <>
      <form onSubmit={handleSubmitSearch}>
        <div className="search">
          <div className="search__icon">
            <SearchOutlined />
          </div>
          <div className="search__input">
            <input
              placeholder="Nhập từ khóa tìm kiếm"
              onFocus={onFocus}
              onBlur={onBlur}
            />
          </div>
          <div className="search__button">
            <button type="submit">Tìm kiếm</button>
          </div>
        </div>
      </form>
      <div className="search-mask"></div>
      <div className="box-search">
        <span>Gợi ý sản phẩm</span>
      </div>
    </>
  );
}

export default memo(SearchBox);
