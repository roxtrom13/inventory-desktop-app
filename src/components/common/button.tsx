import { mergeProps, children, Show } from "solid-js";
import type { ChildrenReturn } from "solid-js";

interface buttonProps {
  children: ChildrenReturn | string;
  loadingText?: string;
  loading?: boolean;
  class?: string;
  onClick: Function | Promise<any>;
}

export default function ButtonComponent(properties: buttonProps) {
  const props = mergeProps(
    {
      loadingText: "Cargando",
      loading: false,
    },
    properties
  );
  const c = children(() => props.children);
  console.log(props.class);
  return (
    <button
      class="btn mt-6"
      classList={{
        "cursor-not-allowed": props.loading,
        [props.class as string]: !!props.class,
      }}
      type="submit"
      disabled={props.loading}
    >
      <Show when={props.loading} fallback={<>{c()}</>}>
        <div class="flex justify-center items-center">
          <svg
            class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          {props.loadingText} ...
        </div>
      </Show>
    </button>
  );
}
