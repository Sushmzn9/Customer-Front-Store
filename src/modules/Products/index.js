import React, { useEffect, useState } from "react";
import { getProduct } from "../../helper/axios";
import ProductCard from "../../components/ProductCard";
import Skeleton from "react-loading-skeleton";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { product } = await getProduct();
      setProducts(product);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
          PRODUCTS
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          ALL PRODUCTS
        </h1>
      </div>
      {products.length > 0 ? (
        <ProductCard allproducts={products} />
      ) : (
        <div style={{ display: "flex" }}>
          <Skeleton containerClassName="flex-1" />
        </div>
      )}
    </div>
  );
};

export default Products;
