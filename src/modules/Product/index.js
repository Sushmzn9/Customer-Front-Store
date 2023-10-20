import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProduct } from "../../helper/axios";
import Skeleton from "react-loading-skeleton";
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
        // You can handle the error here (e.g., display an error message)
      }
    };

    fetchProduct();
  }, [_id]);

  const handleCart = (_id, redirect) => {
    const cartItem = cart.find((item) => item._id === _id);
    if (!cartItem) {
      dispatch(setCart({ ...productDt, orderQty: 1 }));
      toast.success("Product Added To Cart");
    } else {
      const updatedOrderQty = (cartItem.orderQty || 0) + 1;
      dispatch(setCart({ ...cartItem, orderQty: updatedOrderQty }));
      toast.success("Product Added To Cart");
    }

    if (redirect) {
      navigate("/cart");
    }
  };

  if (!Object.keys(productDt).length > 0) {
    return (
      <div style={{ display: "flex" }}>
        <Skeleton containerClassName="flex-1" />
      </div>
    );
  }

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
            <p className="leading-relaxed">{productDt?.description}</p>
            <div className="flex flex-row justify-between items-center">
              <span className="title-font font-serif font-extrabold text-2xl text-gray-900 uppercase">
                price: ${productDt?.price}
              </span>
              <div className="flex mt-4">
                <button
                  className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded mr-2"
                  onClick={() => handleCart(productDt._id, true)}
                >
                  Buy it now
                </button>
                <button
                  className="flex ml-auto border border-indigo-500 py-2 px-6 focus:outline-none hover:bg-indigo-600 hover:text-white rounded"
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
