import { Navigate } from "react-router";
const todoRouter = () => {
   return [
      {
         path: "list",
         HydrateFallback: () => <div>Loading...</div>,
         lazy: async () => {
            const { default: Component } = await import("../pages/todo/ListPage");
            return { Component };
         },
      },
      {
         path: "add",
         HydrateFallback: () => <div>Loading...</div>,
         lazy: async () => {
            const { default: Component } = await import("../pages/todo/AddPage");
            return { Component };
         },
      },
      {
         path: "modify/:no",
         HydrateFallback: () => <div>Loading...</div>,
         lazy: async () => {
            const { default: Component } = await import("../pages/todo/ModifyPage");
            return { Component };
         },
      },
      {
         path: "read/:no",
         HydrateFallback: () => <div>Loading...</div>,
         lazy: async () => {
            const { default: Component } = await import("../pages/todo/ReadPage");
            return { Component };
         },
      },
      {
         index: true,
         element: <Navigate to="list" replace />,
      },
   ];
};

export default todoRouter;