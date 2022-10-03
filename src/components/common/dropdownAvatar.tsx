import Store from "../../store";

import { Icon } from "solid-heroicons";
import { chevronDown, chevronUp, arrowLeftOnRectangle, adjustmentsVertical, user } from "solid-heroicons/solid-mini";
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
  location.reload();
}

function classNames(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

function Separator() {
  return (
    <div class="flex items-center" aria-hidden="true">
      <div class="w-full border-t border-gray-200 my-1" />
    </div>
  );
}

export default function DropdownAvatar() {

  function userName(): string {
    return `${store.user?.first_name}`;
  }

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
            <p class="text-white mr-2 font-semibold">{ userName() }</p>
            <PopoverButton>
              {/* THIS IS THE CHILD */}
              <img
                class="inline-block h-12 w-12 rounded-full"
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
              unmount={true}
              class="absolute z-10 px-4 mt-3 transform -translate-x-2/3 left-1/3 sm:px-0 lg:max-w-3xl"
            >
              <Menu class="overflow-hidden w-64 rounded-lg shadow-lg ring-2 ring-black ring-opacity-5 bg-white flex flex-col py-3 px-1">
                <MenuItem
                  as="button"
                  class="dropdown-item2"
                >
                  <Icon class="mr-2" height="20px" path={user} />
                  <span>Mi perfil</span>
                </MenuItem>
                <MenuItem
                  as="button"
                  class="dropdown-item2"
                >
                  <Icon class="mr-2" height="20px" path={adjustmentsVertical} />
                  <span>Configuración</span>
                </MenuItem>
                <Separator/>
                <MenuItem
                  as="button"
                  class="dropdown-item2"
                  onClick={() => performLogout()}
                >
                  <Icon class="mr-2" height="20px" path={arrowLeftOnRectangle} />
                  <span>Salir</span>
                </MenuItem>
              </Menu>
            </PopoverPanel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
