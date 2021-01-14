import React from "react";
import { RouteProps } from "react-router-dom";
import Main from "./pages/main";
import Region from "./pages/region";
import NotFound from "./components/not-found";

const routes: Array<RouteProps> = [
  {
    path: "/",
    exact: true,
    children: () => <Main />,
  },
  {
    path: "/region/:order",
    exact: true,
    children: () => <Region />,
  },
  {
    path: "*",
    children: () => <NotFound />,
  },
];

export default routes;
