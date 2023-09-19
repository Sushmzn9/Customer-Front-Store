import React from "react";
import { Link } from "react-router-dom";
import { Laptop } from "lucide-react";

const FeatureCard = ({ categories }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
            CATEGORIES
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
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
                className="p-4 md:w-1/3 cursor-pointer "
              >
                <div className="flex rounded-lg h-full bg-g ray-100 p-8 flex-col border hover:bg-slate-200 hover:scale-105 shadow transition-all ease-linear">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
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
