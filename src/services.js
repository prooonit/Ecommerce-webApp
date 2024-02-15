const FakeStoreApi = {
  fetchAllProducts: async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const result =  res.json(); // Call .json() method to parse the response
      return result;
    },
    fetchProductByid: async (productId) => {
      const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const result = await res.json(); // Call .json() method to parse the response
      return result;
    },
    fetchProductsBySearchQuery: async (query) => {
      const res = await fetch('https://fakestoreapi.com/products');
      const result = await res.json(); // Call .json() method to parse the response
      return result.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    },
  };
  
  export { FakeStoreApi };
  