import { Outlet } from "react-router-dom";

function Content() {
  return (
    <>
      <div className="container" style={{ marginTop: "20px" }}>
        <Outlet />
      </div>
    </>
  );
}

export default Content;
