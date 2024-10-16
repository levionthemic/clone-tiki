import { siderRoutes } from "../../../routes/siderRoutes"
import { useRoutes } from "react-router-dom"

function SiderRoutes() {
  const siderElement = useRoutes(siderRoutes);

  return (
    <>
      {siderElement}
    </>
  )
}

export default SiderRoutes;