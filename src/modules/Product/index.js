import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProduct } from "../../helper/axios";
import { Facebook, Heart, Instagram, Star } from "lucide-react";
import Skeleton from "react-loading-skeleton";
import { toast } from "react-toastify";

const Product = () => {
  const { _id } = useParams();
  const navigate = useNavigate();
  const [productDt, setProductDt] = useState({});
  useEffect(() => {
    const fetchProduct = async () => {
      const { product } = await getProduct(_id);
      setProductDt(product);
    };
    fetchProduct();
  }, [_id]);

  const handleCart = (productDt, redirect) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    console.log(cart);
    const isProductNotExist = !cart.find((item) => item._id === productDt._id);
    console.log(isProductNotExist);
    if (isProductNotExist) {
      localStorage.setItem(
        "cart",
        JSON.stringify([...cart, { ...productDt, quantity: 1 }])
      );
      toast.success("Product added to cart");
    } else {
      const updatedCart = cart.map((item) => {
        if (item._id === productDt._id) {
          const newQuantity = Math.min(
            item.quantity + 1,
            parseInt(`${item.qty}`)
          );
          if (newQuantity === parseInt(`${item.qty}`)) {
            toast.info(
              "You have reached the maximum quantity limit for this item."
            );
          } else {
            toast.success("Product added to cart");
          }
          return {
            ...item,
            quantity: newQuantity,
          };
        }

        return item;
      });
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
    if (redirect) {
      navigate("/cart");
    }
  };

  if (!Object.keys(productDt).length > 0)
    return (
      <div style={{ display: "flex" }}>
        <Skeleton containerClassName="flex-1" />
      </div>
    );

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt={productDt?.title}
            className="lg:w-1/2 w-full lg:h-auto max-h-[600px] h-64 object-contain object-center rounded"
            src={
              process.env.REACT_APP_ROOTSERVER + productDt.thumbnail?.slice(6)
            }
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
              {productDt?.category}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {productDt?.name}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                <Facebook />
                <Instagram />
              </span>
            </div>
            <p className="leading-relaxed">{productDt?.description}</p>
            <div className="flex justify-between items-center">
              <span className="title-font font-medium text-2xl text-gray-900 uppercase">
                price: ${productDt?.price}
              </span>
              <div className="flex mt-4">
                <button
                  className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded mr-2"
                  onClick={() => handleCart(productDt, true)}
                >
                  Buy it now
                </button>
                <button
                  className="flex ml-auto border border-indigo-500 py-2 px-6 focus:outline-none hover:bg-indigo-600 hover:text-white rounded"
                  onClick={() => handleCart(productDt)}
                >
                  Add to cart
                </button>
              </div>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center active:text-white ml-4 focus:bg-red-700">
                <Heart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
