import { createStore } from "solid-js/store";

import {
  home,
  shoppingBag,
  circleStack,
  cog,
  bookOpen,
} from "solid-heroicons/solid";

import { MenuItem, User } from "./types";

interface AppStore {
  menuItems: Array<MenuItem>;
  user: User | null;
}

export default createStore<AppStore>({
  menuItems: [
    {
      name: "Inicio",
      route: "/",
      open: false,
      icon: home,
      children: null,
    },
    {
      name: "Ventas",
      route: "/sales",
      open: false,
      icon: shoppingBag,
      children: [
        {
          name: "Crear",
          route: "/",
        },
        {
          name: "Registros",
          route: "/",
        },
      ],
    },
    {
      name: "Inventario",
      route: "/inventory",
      open: false,
      icon: circleStack,
      children: [
        {
          name: "Categorías",
          route: "/categories",
        },
        {
          name: "Productos",
          route: "/products",
        },
      ],
    },
    {
      name: "Operaciones",
      route: "/operations",
      open: false,
      icon: cog,
      children: [
        {
          name: "Devoluciones y anulaciones",
          route: "/devolutions",
        },
      ],
    },
    {
      name: "Guías",
      route: "/guides",
      open: false,
      icon: bookOpen,
      children: [
        {
          name: "Guías de ingresos",
          route: "/income",
        },
        {
          name: "Guías de salidas",
          route: "/departure",
        },
      ],
    },
  ],
  user: null,
});
