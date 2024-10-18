import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import { Footer } from "antd/es/layout/layout";


function DefaultLayout() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default DefaultLayout;