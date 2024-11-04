import DefaultLayout from "../Layout/DefaultLayout";
import HomePage from "../pages/HomePage";
import CategoryPage from "../pages/CategoryPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import SearchPage from "../pages/SearchPage";

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
        path: "/products/detail/:productId",
        element: <ProductDetailPage />
      },
      {
        path: "/search",
        element: <SearchPage />
      }
      // {
      //   path: "/cart",
      //   element: <CartPage />
      // },
    ]
  }
]