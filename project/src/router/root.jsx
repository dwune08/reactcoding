import { createBrowserRouter } from "react-router";

const root = createBrowserRouter([
   {
      path: "/",
      HydrateFallback: () => <div>Loading...</div>,
      lazy: async () => {
         const { default: Component } = await import("../pages/MainPage");
         return { Component };
      },
   },
   {
      path: "/about",
      HydrateFallback: () => <div>Loading...</div>,
      lazy: async () => {
         const { default: Component } = await import("../pages/AboutPage");
         return { Component };
      },
   },
]);

export default root;