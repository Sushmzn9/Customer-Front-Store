import React, { useEffect, useState } from "react";
import FeatureCard from "../FeatureCard";
import { getCategories } from "../../helper/axios";

const Categories = () => {
  const [categories, setCategoriesById] = useState([]);
  useEffect(() => {
    const fetchCategoriesById = async () => {
      const { category } = await getCategories();
      setCategoriesById(category);
    };
    fetchCategoriesById();
  }, []);

  if (categories.length === 0) return <div>Loading.....</div>;

  return <FeatureCard categories={categories} />;
};

export default Categories;
