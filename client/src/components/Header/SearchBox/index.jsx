import { SearchOutlined } from "@ant-design/icons";
import "./SearchBox.scss"

function SearchBox() {
  const onFocus = () => {
    const input = document.querySelector(".search__input input");
    input.classList.add("focus");
  }
  const onBlur = () => {
    const input = document.querySelector(".search__input input");
    input.classList.remove("focus");
  }


  return (
    <form>
      <div className="search">
        <div className="search__icon">
          <SearchOutlined />
        </div>
        <div className="search__input">
          <input placeholder="Nhập từ khóa tìm kiếm" onFocus={onFocus} onBlur={onBlur}/>
        </div>
        <div className="search__button">
          <button>Tìm kiếm</button>
        </div>
      </div>
    </form>
  );
}

export default SearchBox;
