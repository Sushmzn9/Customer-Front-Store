import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProduct } from "../../helper/axios";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../Cart/CartSlice";
import { toast } from "react-toastify";

const Product = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cartInfo);
  const { _id } = useParams();
  const navigate = useNavigate();
  const [productDt, setProductDt] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { product } = await getProduct(_id);
        setProductDt(product);
      } catch (error) {
        console.error("Error fetching product:", error);
        // Handle the error here (e.g., display an error message)
      }
    };

    fetchProduct();
  }, [_id]);

  const handleCart = (_id, redirect) => {
    const cartItem = cart.find((item) => item._id === _id);
    const updatedOrderQty = cartItem ? (cartItem.orderQty || 0) + 1 : 1;

    dispatch(setCart({ ...productDt, orderQty: updatedOrderQty }));

    toast.success("Product Added To Cart");

    if (redirect) {
      navigate("/cart");
    }
  };

  if (!Object.keys(productDt).length) {
    return (
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <p>
          <Skeleton count={3} />
        </p>
      </SkeletonTheme>
    );
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt={productDt?.title}
            className="lg:w-1/2 w-full lg:h-auto max-h-[600px] h-64 object-contain object-center rounded-lg"
            src={
              process.env.REACT_APP_ROOTSERVER + productDt.thumbnail?.slice(6)
            }
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm text-indigo-500 tracking-widest uppercase">
              {productDt?.category}
            </h2>
            <h1 className="text-3xl text-gray-900 font-medium mb-1">
              {productDt?.name}
            </h1>
            <p className="leading-relaxed">{productDt?.description}</p>
            <div className="flex flex-row justify-between items-center mt-4">
              <span className="text-2xl text-gray-900 font-serif font-extrabold uppercase">
                Price: ${productDt?.price}
              </span>
              <div className="flex">
                <button
                  className="flex text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded mr-2"
                  onClick={() => handleCart(productDt._id, true)}
                >
                  Buy it now
                </button>
                <button
                  className="flex border border-indigo-500 py-2 px-6 focus:outline-none hover:bg-indigo-600 hover:text-white rounded"
                  onClick={() => handleCart(productDt._id)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
