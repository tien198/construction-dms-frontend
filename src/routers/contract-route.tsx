import type { RouteObject } from "react-router";

export const contractRoute: RouteObject = {
  path: "/hop-dong",
  children: [
    {
      path: "tao-moi",
      action: (args) =>
        import("../pages/contract/action/create-action").then((m) =>
          m.createAction(args),
        ),
    },
    {
      path: "chinh-sua/:contract-id",
      action: (args) =>
        import("../pages/contract/action/edit-action").then((m) =>
          m.editAction(args),
        ),
    },
  ],
};
