import { createContext } from "react";

const CategoryContext = createContext({
  menuItem: [],
  setMenuItem: () => {} 
});

export default CategoryContext;