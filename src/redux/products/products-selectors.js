
const getLoading = state => state.products.loading;

const getAllProducts = state => state.products.products;

const getError = state => state.products.error;

const selectors = {
    getLoading,
    getAllProducts,
    getError,
};

export default selectors;