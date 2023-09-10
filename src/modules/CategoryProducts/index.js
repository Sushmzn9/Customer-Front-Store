import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import { getProductCategoriesById } from "../../helper/axios";

const CategoryProducts = () => {
  const { _id } = useParams();
  const [productDt, setProductDt] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { product } = await getProductCategoriesById({ _id });
      console.log(product);
      setProductDt(product);
    };
    fetchProducts();
  }, [_id]);

  if (productDt?.length === 0) return <div>Loading.....</div>;

  return <ProductCard products={productDt} />;
};

export default CategoryProducts;
