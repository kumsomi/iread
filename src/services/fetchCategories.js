import axios from "axios";

const fetchCategories = async (productDispatch) => {
  try {
    const {
      data: { categories },
    } = await axios.get("/api/categories");
    console.log(categories);

    productDispatch({
      type: "INIT_CATEGORIES_SUCCESS",
      payload: {
        categories,
        categoriesMessage: {
          loading: null,
          error: null,
        },
      },
    });
  } catch (err) {
    productDispatch({
      type: "INIT_CATEGORIES_FAILURE",
      payload: {
        categoriesMessage: {
          loading: null,
          error: "could not load the categories",
        },
      },
    });
  }
};

export default fetchCategories;
