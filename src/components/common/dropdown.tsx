import { createStore } from "solid-js/store";

import { Icon } from "solid-heroicons";
import { chevronDown, chevronUp } from "solid-heroicons/solid-mini";

export default function Dropdown() {
  const [state, setState] = createStore({
    open: false,
  });

  return (
    <div
      onClick={() => setState("open", !state.open)}
      class="relative cursor-pointer"
    >
      <div class="flex items-center">
        <button class="bg-red-400">hola</button>{" "}
        {/* this is the child and should be replaced */}
        <Icon
          class="ml-1"
          path={state.open ? chevronUp : chevronDown}
          height="20px"
          color="white"
        />
      </div>
      <div hidden={!state.open} class="absolute z-10 w-56 mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg">
        <div class="p-2">
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
          >
            ReactJS Dropdown 1
          </a>
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
          >
            ReactJS Dropdown 2
          </a>
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
          >
            ReactJS Dropdown 3
          </a>
        </div>
      </div>
    </div>
  );
}
