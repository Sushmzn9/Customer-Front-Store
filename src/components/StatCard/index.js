import React from "react";
import { DollarSignIcon, StoreIcon, UserIcon } from "lucide-react";

const Stats = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Tech Store Statistics
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Explore our tech store statistics, including customer data, product
            inventory, and daily sales.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 text-center justify-center">
          {/* Customer Statistics */}
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <UserIcon className="text-indigo-500 w-12 h-12 mb-3 inline-block" />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                2,500
              </h2>
              <p className="leading-relaxed">Customers</p>
            </div>
          </div>

          {/* Product Inventory */}
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <StoreIcon className="text-indigo-500 w-12 h-12 mb-3 inline-block" />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                1,200
              </h2>
              <p className="leading-relaxed">Products in Inventory</p>
            </div>
          </div>

          {/* Daily Sales */}
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <DollarSignIcon className="text-indigo-500 w-12 h-12 mb-3 inline-block" />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                $10,000
              </h2>
              <p className="leading-relaxed">Daily Sales</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
