import { Bidder } from "@/pages/bidder";
import { Outlet, type RouteObject } from "react-router";

export const bidderRoute: RouteObject = {
  path: "/nha-thau",
  element: (
    <>
      <Outlet />
    </>
  ),
  children: [
    {
      index: true,
      element: <Bidder.List />,
    },
    {
      path: ":id",
      element: <Bidder.Detail />,
    },
    {
      path: "tao-moi",
      element: <Bidder.Create />,
      action: (args) =>
        import("../pages/bidder/action/create-action").then((m) =>
          m.createAction(args),
        ),
    },
    {
      path: "chinh-sua/:id",
      action: (args) =>
        import("../pages/bidder/action/edit-action").then((m) =>
          m.editAction(args),
        ),
    },
  ],
};
