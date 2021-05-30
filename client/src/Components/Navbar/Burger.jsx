import { Burger } from "../../Assets/svg";
import { Menu, Transition } from "@headlessui/react";

function BurgerElement(props) {
  const {buttons, clicked} = props;

  const Button = (props) => {
    return (
      <div
        onClick={() => clicked(props.title)}
        className="py-2 px-4 w-52 duration-300 group hover:bg-red-600 font-roboto-slab flex justify-between items-center cursor-pointer"
      >
        <div className="text-red-600 group-hover:text-gray-50">{props.title}</div>
      </div>
    )
  }
  return (
    <Menu as="div" className="relative">
      {({ open }) => (
          <>
            <Menu.Button className="flex items-center group focus:outline-none">
              <Burger class="h-8 w-8 block lg:hidden mr-4 sm:mr-6 md:mr-8 hover:text-red-400" />
            </Menu.Button>
            <Transition
              show={open}
              enter="transition-opacity duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Menu.Items
              static
              className="absolute right-0 mt-3 origin-top-right border border-gray-300 bg-gray-50 focus:outline-none">
                {buttons.map((button, idx) => (
                  <Menu.Item key={idx}>
                    <Button title={button}/>
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </>
        )
      }
    </Menu>
  )
}

export default BurgerElement;