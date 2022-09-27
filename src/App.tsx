import type { Component } from "solid-js";
import { Show } from "solid-js";
import Store from "./store";

import Default from "./layouts/default";
import Blank from "./layouts/blank";

const App: Component = () => {

  const [store] = Store;

  return (
    <Show when={!store.user}
      fallback={<Blank />}
    >
      <Default />
    </Show>
  );
};

export default App;
