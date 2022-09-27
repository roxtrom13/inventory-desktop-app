// import { createStore } from "solid-js/store";
// import Store from "../store";
import Dropdown from "../components/common/dropdown";

var src = "";

export default function Topbar() {



  return (
    <div class="sticky py-2 px-8 h-16 top-0 ml-24 md:ml-60 z-30 w-[calc(100% - 6rem)] md:w-[calc(100% - 15rem)] bg-cyan-500 flex items-center justify-between">
      <p class="text-white text-2xl">&#123; title &#125;</p>
      <Dropdown></Dropdown>
    </div>
  );
}
