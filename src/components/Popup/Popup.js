import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment, useEffect, useState } from "react";
import { getCategories } from "../../helper/axios";
import { Link } from "react-router-dom";

export default function MyPopover() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await getCategories();
      const { category } = response;
      setCategories(category);
    };
    fetchCategories();
  }, []);

  return (
    <div className="top-16 w-full max-w-sm px-4 text-center">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center text-center rounded-md bg-orange-700 px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span>Categories</span>
              <ChevronDownIcon
                className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-orange-300 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                    {categories?.map((category) => (
                      <Link
                        key={category._id}
                        to={`category/${category.slug}/${category._id}`}
                        className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                          {/* <item.icon aria-hidden="true" /> */}
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900 uppercase bold">
                            {category.title}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="bg-gray-50 p-4"></div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
