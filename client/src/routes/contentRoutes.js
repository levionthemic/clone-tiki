import Content from "../components/Content";
import ContentCategoryPage from "../components/Content/ContentCategoryPage";
import ContentHomePage from "../components/Content/ContentHomePage";

export const contentRoutes = [
  {
    path: "/",
    element: <Content />,
    children: [
      {
        path: "/",
        element: <ContentHomePage />,
      },
      {
        path: "/",
        element: <ContentCategoryPage />,
      },
    ],
  },
];
