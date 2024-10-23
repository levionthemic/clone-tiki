import DefaultLayout from "../Layout/DefaultLayout";
import HomePage from "../pages/HomePage";
import CategoryPage from "../pages/CategoryPage";

export const routes = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/categories/:categoryId",
        element: <CategoryPage />
      },
      // {
      //   path: "/cart",
      //   element: <CartPage />
      // },
    ]
  }
]