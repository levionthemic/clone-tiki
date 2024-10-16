import { contentRoutes } from "../../../routes/contentRoutes"
import { useRoutes } from "react-router-dom"

function ContentRoutes() {
  const contentElement = useRoutes(contentRoutes);

  return (
    <>
      {contentElement}
    </>
  )
}

export default ContentRoutes;