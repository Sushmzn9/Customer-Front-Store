import React from "react";
import { Link } from "react-router-dom";
import { Laptop } from "lucide-react";

const FeatureCard = ({ categories }) => {
  return (
    <section className="text-gray-600 body-font bg-gray-100">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-600 tracking-widest font-medium mb-1 uppercase">
            Categories
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium text-gray-900">
            Our Popular Categories
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {categories?.map((category) => {
            const { title, slug, _id } = category;
            return (
              <Link
                key={_id}
                to={`category/${slug}/${_id}`}
                className="p-4 md:w-1/3 cursor-pointer"
              >
                <div className="flex rounded-lg h-full bg-white p-8 flex-col border hover:shadow-lg hover:scale-105 transition-transform ease-in-out duration-300">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-600 text-white flex-shrink-0">
                      <Laptop />
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium capitalize">
                      {title}
                    </h2>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;
