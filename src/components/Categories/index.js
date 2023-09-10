import React, { useEffect, useState } from "react";
import FeatureCard from "../FeatureCard";
import { getProductCategoriesById } from "../../helper/axios";
import { useParams } from "react-router-dom";

const Categories = () => {
  const [categories, setCategoriesById] = useState([]);
  const { _id } = useParams();
  useEffect(() => {
    const fetchCategoriesById = async () => {
      const response = await getProductCategoriesById({ _id });
      console.log(response);
      setCategoriesById(response);
    };
    fetchCategoriesById();
  }, []);

  if (categories.length === 0) return <div>Loading.....</div>;

  return <FeatureCard cards={categories} />;
};

export default Categories;
