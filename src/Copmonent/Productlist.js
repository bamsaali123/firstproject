import Product from "./Product";
import { useEffect, useState } from "react";

function Productlist() {
  const api_url = "https://fakestoreapi.com";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProduct = () => {
    fetch(`${api_url}/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  const getCategory = () => {
    fetch(`${api_url}/products/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };

  const getProductInCategory = (catName) => {
    fetch(`${api_url}/products/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getProduct();
    getCategory();
  }, []);

  return (
    <>
      <h2 className="text-center p-3">Our Products</h2>
      <div className="container">
        <button
          onClick={() => {
            getProduct();
          }}
          className="btn btn-info"
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              getProductInCategory(cat);
            }}
            className="btn btn-info"
          >
            {cat}
          </button>
        ))}
        <div className="row">
          {products.map((product) => (
            <div className="col-3" key={product.id}>
              <Product product={product} showButton={true} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Productlist;