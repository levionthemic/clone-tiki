import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const getLevelKeys = (items1) => {
  const key = {};
  const func = (items2, level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};

function SiderCategoryPage() {
  const [menuItem, setMenuItem] = useState([]);
  const categoryId = parseInt(useParams().categoryId);

  useEffect(() => {
    fetch("http://localhost:3002/api/v1/categories/" + categoryId)
      .then((res) => res.json())
      .then((data) => {
        setMenuItem(data.data);
      });
  }, [categoryId]);

  const levelKeys = getLevelKeys(menuItem);

  const [stateOpenKeys, setStateOpenKeys] = useState(["2", "23"]);
  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1
    );
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      );
    } else {
      // close
      setStateOpenKeys(openKeys);
    }
  };

  return (
    <>
      <div className="sider">
        <div>Khám phá theo danh mục</div>
        <Menu
          mode="inline"
          defaultSelectedKeys={["320"]}
          openKeys={stateOpenKeys}
          onOpenChange={onOpenChange}
          style={{
            width: 256,
            fontSize: "12px",
          }}
          items={menuItem}
        />
      </div>
    </>
  );
}

export default SiderCategoryPage;
