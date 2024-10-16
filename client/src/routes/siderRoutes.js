import Sider from "../components/Sider";
import SiderHomePage from "../components/Sider/SiderHomePage";
import SiderCategoryPage from "../components/Sider/SiderCategoryPage";

export const siderRoutes = [
  {
    path: "/",
    element: <Sider />,
    children: [
      {
        path: "/",
        element: <SiderHomePage />,
      },
      {
        path: "/",
        element: <SiderCategoryPage />,
      },
    ],
  },
];
