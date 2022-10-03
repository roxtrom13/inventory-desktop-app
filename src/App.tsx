import type { Component } from "solid-js";
import { Show } from "solid-js";
import Store from "./store";

import Default from "./layouts/default";
import Blank from "./layouts/blank";

const image = new File(["blob"], "ga");
console.log(image);

const App: Component = () => {

  const [store, setStore] = Store;

  function loggedInUser() {
    let storageUser = localStorage.getItem("user");
    if (!!store.user) return true;
    if (!!storageUser) {
      const user = JSON.parse(storageUser);
      setStore("user", user);
      return true;
    }
    return false;
  }

  return (
    <Show when={loggedInUser()}
      fallback={<Blank />}
    >
      <Default />
    </Show>
  );
};

export default App;
