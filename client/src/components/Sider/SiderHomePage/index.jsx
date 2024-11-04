import { memo } from "react";
import { useEffect } from "react";
import "./SiderHomePage.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchSuccess } from "../../../redux/slices/categorySiderSlice";

function SiderHomePage() {
  const categories = useSelector((state) => state.categorySider.value);
  const dispatch = useDispatch();
  // const [utils, setUtils] = useState([]);

  useEffect(() => {
    if (!categories) {
      fetch("http://localhost:8001/api/v1/categories")
        .then((res) => res.json())
        .then((data) => {
          dispatch(fetchSuccess(data.data));
        });
    }

    // fetch("http://localhost:3001/sider")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setUtils(data.highlight_block.items);
    //   });
  }, [categories, dispatch]);

  return (
    <div className="sider position-sticky">
      <div className="sider__category">
        <h5>Danh mục</h5>
        <ul>
          {categories ? (
            <>
              {categories.payload.map((item) => {
                return (
                  <li key={item.id}>
                    <Link
                      to={`http://localhost:8000/categories/${item.id}`}
                      className="link-category"
                    >
                      <img src={item.icon_url} alt="icon" />
                      <span>{item.text}</span>
                    </Link>
                  </li>
                );
              })}
            </>
          ) : (
            <></>
          )}
        </ul>
      </div>
      {/* <div className="sider__util">
        <h5>Tiện ích</h5>
        <ul>
          {utils.map((item, index) => {
            return (
              <li key={index}>
                <img src={item.icon_url} alt="icon" />
                <span>{item.text}</span>
              </li>
            );
          })}
        </ul>
      </div> */}
    </div>
  );
}

export default memo(SiderHomePage);
