import DefaultLayout from "../Layout/DefaultLayout";
import HomePage from "../pages/HomePage";
import CategoryPage from "../pages/CategoryPage";
import ProductDetailPage from "../pages/ProductDetailPage";

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
      {
        path: "products/detail/:productId",
        element: <ProductDetailPage />
      },
      // {
      //   path: "/cart",
      //   element: <CartPage />
      // },
    ]
  }
]