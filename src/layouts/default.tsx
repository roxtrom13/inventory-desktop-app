import { lazy } from "solid-js";
import SideBar from "../components/sidebar";
import Topbar from "../components/topbar";
import { Routes, Route } from "solid-app-router";

const Home = lazy(() => import("../pages/home"));
const Sales = lazy(() => import("../pages/sales"));
const Categories = lazy(() => import("../pages/categories"));

export default function Default() {
  return (
    <div class="relative min-h-screen w-full bg-white">
      <SideBar />
      <Topbar />
      <section class="p-2 relative max-h-screen left-24 md:left-60 w-[calc(100%-6rem)] md:w-[calc(100%-15rem)] z-10 overflow-y-hidden">
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/sales" component={Sales} />
          <Route path="/inventory/categories" component={Categories} />
        </Routes>
      </section>
    </div>
  )
}
