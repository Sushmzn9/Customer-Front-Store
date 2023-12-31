import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ allproducts }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 justify-center">
          {allproducts?.map((product) => {
            const { _id, name, price, slug, category, thumbnail, salesPrice } =
              product;
            return (
              <Link
                key={_id}
                to={`/products/${slug}/${_id}`}
                className="lg:w-[23%] md:w-1/2 p-4 w-full mb-4 cursor-pointer rounded-lg border shadow ml-4 hover:scale-105 transition-all ease-linear"
              >
                <span className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt={name}
                    className=" object-contain object-center w-full h-full block"
                    src={process.env.REACT_APP_ROOTSERVER + thumbnail?.slice(6)}
                  />
                </span>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
                    {category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {name}
                  </h2>
                  <p className="mt-1 text-md font-semibold">${price}</p>
                  <p className="mt-1 text-md font-semibold">
                    Sale Price: ${salesPrice}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
