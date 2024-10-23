import { Menu } from "antd";
import { useEffect } from "react";

function SiderCategoryPage() {

  useEffect(() => {
    fetch("")
      .then(res => res.json())
      .then(data => {

      })
  }, []);

  const url = new URL(window.location.href);
  const categoryId = url.searchParams.get("categoryId");

  let item = [];

  

  return (
    <>
      <div className="sider">
        <div>Khám phá theo danh mục</div>
        <Menu item={item} />
      </div>
    </>
  )
}

export default SiderCategoryPage;