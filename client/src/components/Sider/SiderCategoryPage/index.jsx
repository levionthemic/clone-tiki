import { useContext, useState } from "react";
import { StyledMenu } from "./style";
import "./SiderCategoryPage.scss";
import CategoryContext from "../../../pages/CategoryPage/CategoryContext";

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
  const { menuItem } = useContext(CategoryContext);
  
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
        <div className="title">Khám phá theo danh mục</div>
        <StyledMenu
          mode="inline"
          defaultOpenKeys={["320"]}
          openKeys={stateOpenKeys}
          onOpenChange={onOpenChange}
          style={{
            width: "100%",
            fontSize: "12px",
            borderRight: 0,
          }}
          items={menuItem}
        />
      </div>
    </>
  );
}

export default SiderCategoryPage;
