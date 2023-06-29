import React from "react";
import Card from "../Card/Card.jsx";
import { FakeStoreApi } from "../../Helpers/FakeStoreApi.js";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useCart } from "../../ContextApi/Cart.js";

const Product = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useSearchParams();

  const searchQuery = query.get("q");

  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const products = searchQuery
        ? await FakeStoreApi.fetchProductsBySearchQuery(searchQuery)
        : await FakeStoreApi.fetchAllProducts();
      setProducts(products);
      setLoading(false);
    };
    fetchProducts().catch(console.error);
  }, [searchQuery]);

  // !product.length meaning if we dont get product
  if (!loading && searchQuery && !products.length) {
    return (
      <div className="container">
        <p className="text-start card-text">No matching Product Found</p>
      </div>
    );
  }

  return (
    <>
      <section>
        <div className="container mt-5">
          <div className="d-flex flex-wrap">
            <div className="container d-flex flex-wrap flex-row justify-content-around align-items-center  mt-5">
              {loading ? (
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                products.map((product) => (
                  <Card
                    key={product.id}
                    data={product}
                    addToCart={() => addToCart(product)}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
