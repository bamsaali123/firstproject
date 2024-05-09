import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

function ProductDetails() {
  const api_url = "https://fakestoreapi.com/products";
  const params = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`${api_url}/${params.productId}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, []);

  return (
    <>
      <h2 className="text-center p-3">Product Details</h2>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Product product={product} showButton={true} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
