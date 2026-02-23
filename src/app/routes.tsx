import { createHashRouter } from "react-router";
import { Dashboard } from "./components/Dashboard";
import { SyncMonitor } from "./components/SyncMonitor";
import { Clients } from "./components/Clients";
import { Invoices } from "./components/Invoices";
import { Logs } from "./components/Logs";
import { Layout } from "./components/Layout";

export const router = createHashRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "sync", Component: SyncMonitor },
      { path: "clients", Component: Clients },
      { path: "invoices", Component: Invoices },
      { path: "logs", Component: Logs },
    ],
  },
]);
