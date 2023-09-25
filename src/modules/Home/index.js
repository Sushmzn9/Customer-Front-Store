import React, { useEffect, useState } from "react";
import Categories from "../../components/Categories";
import Hero from "../../components/Hero";
import ProductCard from "../../components/ProductCard";
import Products from "../../components/ProductCard";
import Stats from "../../components/StatCard";
import DiscountBanner from "../../components/Add/DiscountBanner";
import { getProduct } from "../../helper/axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Home = () => {
  const [allproducts, setProductsAll] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const { product } = await getProduct();
      setProductsAll(product);
    };
    fetchCategories();
  }, []);

  return (
    <>
      <Hero />
      <Categories />
      <DiscountBanner />
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
          PRODUCTS
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          MOST POPULAR PRODUCTS
        </h1>
      </div>
      {allproducts?.length > 0 ? (
        <ProductCard allproducts={allproducts} />
      ) : (
        <div className="flex mt-10">
          <Skeleton count={5} containerClassName="flex-1" />
        </div>
      )}
      <Stats />
    </>
  );
};

export default Home;
