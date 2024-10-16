import { useState } from "react";
import { useEffect } from "react";
import "./Sider.scss";

function Sider() {
  const [categories, setCategories] = useState([]);
  const [utils, setUtils] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/sider")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.menu_block.items);
        setUtils(data.highlight_block.items);
      });
  }, []);

  return (
    <>
      <div className="sider">
        <div className="sider__category">
          <h5>Danh mục</h5>
          <ul>
            {categories.map((item) => {
              return (
                <li>
                  <img src={item.icon_url} alt="icon" />
                  <span>{item.text}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="sider__util">
          <h5>Tiện ích</h5>
          <ul>
            {utils.map((item) => {
              return (
                <li>
                  <img src={item.icon_url} alt="icon" />
                  <span>{item.text}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sider;
