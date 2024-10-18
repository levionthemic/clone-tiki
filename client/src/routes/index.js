import DefaultLayout from "../Layout/DefaultLayout";
import HomePage from "../pages/HomePage";

export const routes = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/home",
        element: <HomePage />
      },
      // {
      //   path: "/category",
      //   element: <CategoryPage />
      // },
      // {
      //   path: "/cart",
      //   element: <CartPage />
      // },
    ]
  }
]