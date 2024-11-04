import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer"


function DefaultLayout() {
  return (
    <div style={{ position: "relative"}}>
      <Header />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default DefaultLayout;