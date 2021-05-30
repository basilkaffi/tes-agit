import { Dialog, Transition } from '@headlessui/react';
import { Fragment, ReactElement } from 'react';
import { Close } from "../Assets/svg";

function MyModal(props) {

  const { setIsOpen, isOpen } = props;

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeModal}
          open={true}
        >
          <div className="min-h-screen px-4 text-center bg-gray-900 bg-opacity-70">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div 
                style={{minWidth: "320px"}}
                className="inline-block bg-gray-100 w-full max-w-max p-6 my-8 text-left align-middle transition-all transform shadow-xl rounded-sm"
              >
                <div
                  className="absolute right-0 top-0 cursor-pointer transform"
                  onClick={closeModal}
                >
                  <Close class={`h-7 w-7 p-0.5 transform bg-pink-700 hover:bg-pink-600 text-gray-100 m-0.5 rounded`} />
                </div>
                {props.children}
                <button className="absolute"></button>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default MyModal
