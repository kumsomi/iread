import { createContext, useContext, useEffect, useReducer } from "react";
import { fetchProducts } from "../services/fetchProduct";
import fetchCategories from "../services/fetchCategories";
const initialProductState = {
  products: [],
  productsMessage: { loading: true, error: null },
  categories: [],
  categoriesMessage: { loading: true, error: null },
  isOngoingNetworkCall: false,
  productItem: null,
  productItemMessage: { loading: true, error: null },
};
const ProductContext = createContext(initialProductState);
const { Provider } = ProductContext;

export const productReducer = (
  prevProductState,
  {
    type,
    payload: { products, productsMessage, categories, categoriesMessage },
  }
) => {
  switch (type) {
    case "INIT_PRODUCTS_SUCCESS":
      return { ...prevProductState, products, productsMessage };
    case "INIT_PRODUCTS_FAILURE":
      return { ...prevProductState, productsMessage };
    case "INIT_CATEGORIES_SUCCESS":
      return { ...prevProductState, categories, categoriesMessage };
    case "INIT_CATEGORIES_FAILURE":
      return { ...prevProductState, categoriesMessage };
    default:
      return { ...prevProductState };
  }
};

const ProductProvider = ({ children }) => {
  useEffect(() => {
    fetchProducts(productDispatch);
    fetchCategories(productDispatch);
  }, []);
  const [productState, productDispatch] = useReducer(
    productReducer,
    initialProductState
  );

  return (
    <Provider value={{ productDispatch, ...productState }}>{children}</Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export { ProductProvider, useProduct };
