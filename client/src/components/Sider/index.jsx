import { Outlet } from "react-router-dom";

function Sider() {
  return (
    <>
      <div className="container" style={{ width: "230px", marginTop: "20px" }}>
        <Outlet />
      </div>
    </>
  );
}

export default Sider;
