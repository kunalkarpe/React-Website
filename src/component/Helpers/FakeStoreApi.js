
const FakeStoreApi = {

    fetchAllProducts: async () => {
        const res = await fetch("https://fakestoreapi.com/products")
        const result = await res.json()
        return result;

    },

    fetchProductsById: async (productId) => {
        const res = await fetch(`https://fakestoreapi.com/products/${productId}`)
        const result = await res.json()
        return result;


    },
    fetchProductsBySearchQuery: async (query) => {
        const res = await fetch("https://fakestoreapi.com/products")
        const result = await res.json()
        return result.filter((products) => products.title.toLowerCase().includes(query));

    },
}

export { FakeStoreApi }; 