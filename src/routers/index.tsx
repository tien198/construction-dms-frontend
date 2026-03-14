import App from "@/App.tsx";

import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/init",
    action: (args) =>
      import("../pages/create/action").then((m) =>
        m.initConstructionAction(args),
      ),
  },
]);
