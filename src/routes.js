import React, { Component } from "react";
import { DoctorList } from "./views/DoctorList";
import { Home } from "./views/Home";
import { Login } from "./views/Login";
import { VleresoDoktorin } from "./views/VleresoDoktorin";

const dashboardRoutes = [
  {
    path: "",
    name: "Dashboard",
    icon: "pe-7s-graph",
    element: <Home />,
    layout: "/",
  },

  {
    path: "",
    name: "Dashboard",
    icon: "pe-7s-graph",
    element: <DoctorList />,
    layout: "/doctors",
  },

  {
    path: "",
    name: "Dashboard",
    icon: "pe-7s-graph",
    element: <VleresoDoktorin />,
    layout: "/doctor/:id/:name",
  },
];

export default dashboardRoutes;
