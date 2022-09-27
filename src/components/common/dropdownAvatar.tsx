import Store from "../../store";

import { Icon } from "solid-heroicons";
import { chevronDown, chevronUp, arrowLeftOnRectangle } from "solid-heroicons/solid-mini";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
  Menu,
  MenuItem,
} from "solid-headless";

// interface DropdownProps {
//   children: any;
//   position?: DropdownPosition;
//   class?: string;
//   onClick?: Function | Promise<any>;
//   disabled?: boolean;
// }

const [store, setStore] = Store;

function performLogout() {
  localStorage.removeItem("user");
  setStore("user", null);
}

function classNames(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

// function Separator() {
//   return (
//     <div class="flex items-center" aria-hidden="true">
//       <div class="w-full border-t border-gray-200" />
//     </div>
//   );
// }

export default function DropdownAvatar() {

  // const props = mergeProps(
  //   {
  //     position: DropdownPosition.left,
  //     disabled: false,
  //   },
  //   properties
  // );

  // const c = children(() => props.children);

  return (
    <Popover defaultOpen={false} class="relative">
      {({ isOpen }) => (
        <>
          <div class="flex flex-row items-center">
            <PopoverButton>
              {/* THIS IS THE CHILD */}
              <img
                class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://avatars.githubusercontent.com/u/30743104?v=4"
              ></img>
              {/* END OF THE CHILD */}
            </PopoverButton>
            <Icon
              path={isOpen() ? chevronUp : chevronDown}
              class={classNames(
                isOpen() && "text-opacity-70",
                "ml-2 h-6 text-white group-hover:text-opacity-80 transition ease-in-out duration-150"
              )}
            ></Icon>
          </div>
          <Transition
            show={isOpen()}
            enter="transition duration-200"
            enterFrom="opacity-0 -translate-y-1 scale-50"
            enterTo="opacity-100 translate-y-0 scale-100"
            leave="transition duration-150"
            leaveFrom="opacity-100 translate-y-0 scale-100"
            leaveTo="opacity-0 -translate-y-1 scale-50"
          >
            <PopoverPanel
              unmount={false}
              class="absolute z-10 px-4 mt-3 transform -translate-x-2/3 left-1/2 sm:px-0 lg:max-w-3xl"
            >
              <Menu class="overflow-hidden w-64 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white flex flex-col space-y-1 p-1">
                <MenuItem
                  as="button"
                  class="text-sm p-1 text-left rounded hover:bg-purple-600 hover:text-white focus:outline-none focus:bg-purple-600 focus:text-white"
                >
                  Open Link in New Tab
                </MenuItem>
                <MenuItem
                  as="button"
                  class="text-sm p-1 text-left rounded hover:bg-purple-600 hover:text-white focus:outline-none focus:bg-purple-600 focus:text-white"
                >
                  hola
                </MenuItem>
                <MenuItem
                  as="button"
                  class="flex flex-row text-sm p-1 text-left rounded hover:bg-purple-600 hover:text-white focus:outline-none focus:bg-purple-600 focus:text-white"
                  onClick={() => performLogout()}
                >
                  <Icon height="20px" path={arrowLeftOnRectangle} />
                  Salir
                </MenuItem>
              </Menu>
            </PopoverPanel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
