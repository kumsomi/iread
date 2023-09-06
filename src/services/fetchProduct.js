import axios from "axios";

export const fetchProducts = async (productDispatch) => {
  try {
    const {
      data: { products },
    } = await axios.get("/api/products");
    productDispatch({
      type: "INIT_PRODUCTS_SUCCESS",
      payload: {
        products,
        productsMessage: {
          error: null,
          loading: false,
        },
      },
    });
  } catch (err) {
    productDispatch({
      type: "INIT_PRODUCTS_FAILURE",
      payload: {
        productsMessage: {
          loading: false,
          error: "Products could not be fetched",
        },
      },
    });
  }
};
