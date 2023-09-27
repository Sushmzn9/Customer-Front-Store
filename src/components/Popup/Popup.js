import { Popover, Transition } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment, useEffect, useState } from "react";
import { getCategories } from "../../helper/axios";
import { Link } from "react-router-dom";
import { ChevronsDownIcon, Laptop } from "lucide-react";

export default function MyPopover() {
  const [categories, setCategories] = useState([]);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await getCategories();
      const { category } = response;
      setCategories(category);
    };
    fetchCategories();
  }, []);

  return (
    <div className="w-full max-w-sm px-4 text-center">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
              group inline-flex items-center text-center rounded-md bg-orange-700 px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
              onMouseEnter={() => setIsPopoverOpen(true)}
              onMouseLeave={() => setIsPopoverOpen(false)}
            >
              <span>Categories</span>
              <ChevronsDownIcon
                className={`ml-2 h-5 w-5 text-orange-300 transition duration-150 ease-in-out group-hover:text-opacity-80 ${
                  isPopoverOpen ? "transform rotate-180" : ""
                }`}
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
              <Popover.Panel className="absolute z-10 mt-3 w-screen max-w-sm transform -translate-x-1/2 left-1/2 px-4 sm:px-0">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="grid gap-4 p-7 lg:grid-cols-2 bg-white">
                    {categories?.map(({ _id, slug, title }) => (
                      <Link
                        key={_id}
                        to={`category/${slug}/${_id}`}
                        className="-m-3 flex items-center p-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 rounded-lg"
                      >
                        <div className="flex h-10 w-10 items-center justify-center bg-orange-700 text-white rounded-full">
                          <Laptop className="h-6 w-6 text-white" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900 uppercase">
                            {title}
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
