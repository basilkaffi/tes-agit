import { Person, Chevron } from "../../Assets/svg";
import { Menu, Transition } from "@headlessui/react";

function PersonItem(props) {
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
              <Person class="h-8 w-8 p-1 text-gray-50 rounded-full bg-red-600 group-hover:bg-red-400 duration-200" />
              <Chevron class={`${open ? "-rotate-180 transform" : null}text-red-600 h-4 w-4 transform duration-200`} />
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

export default PersonItem;