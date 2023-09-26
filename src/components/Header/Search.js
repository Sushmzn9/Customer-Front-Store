import React, { useState } from "react";
import { Link } from "react-router-dom";

const SearchPopover = ({ displayProduct, handleOnSearch }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleFocus = () => {
    setIsPopoverOpen(true);
  };

  const handleBlur = () => {
    setIsPopoverOpen(false);
  };

  console.log(displayProduct);
  return (
    <div className="relative">
      <input
        className="h-10 w-full px-4 py-2 rounded-lg border shadow-sm text-sm focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400"
        id="search"
        type="search"
        placeholder="Search website..."
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleOnSearch}
      />
      {isPopoverOpen && (
        <div className="absolute top-full left-0 mt-2 w-56 border-none bg-white border rounded-lg shadow-lg">
          <ul className="flex flex-col">
            {displayProduct.map(({ name, _id, slug, thumbnail }) => {
              return (
                <Link key={_id} href={`/products/${slug}/${_id}`}>
                  <li className="px-4 py-2 hover:bg-indigo-100 text-sm flex gap-2">
                    <img
                      className="h-10 w-10 rounded-md border object-contain object-center"
                      src={
                        process.env.REACT_APP_ROOTSERVER + thumbnail?.slice(6)
                      }
                      alt={name}
                    />
                    {name}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchPopover;
