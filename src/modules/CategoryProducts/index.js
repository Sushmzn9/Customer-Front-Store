import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import { getProductCategoriesById } from "../../helper/axios";
import Skeleton from "react-loading-skeleton";

const CategoryProducts = () => {
  const { _id } = useParams();
  const [productDt, setProductDt] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { product } = await getProductCategoriesById({ _id });
      setProductDt(product);
    };
    fetchProducts();
  }, [_id]);

  if (productDt?.length === 0)
    return (
      <div style={{ display: "flex" }}>
        <Skeleton containerClassName="flex-1" />
      </div>
    );

  return <ProductCard allproducts={productDt} />;
};

export default CategoryProducts;
