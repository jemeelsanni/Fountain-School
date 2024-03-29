import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  let [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const logoutHandler = () => {
    navigate("/");
  };
  return (
    <div>
      {" "}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative  z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed  inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden  bg-white border-2 border-fountain p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Are yo sure you want to Logout
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      where learning begins...
                    </p>
                  </div>

                  <div className="mt-4 w-1/3  justify-between flex">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-white-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={logoutHandler}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center text-red-600 rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium  hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      No
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <button
        type="button"
        onClick={openModal}
        className="rounded-md relative "
      >
        Logout
      </button>
    </div>
  );
};

export default LogOut;
