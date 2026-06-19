import { Period_Nav } from "@/global-layout/period-nav";
import { Outlet, type RouteObject } from "react-router";
import { KhLcnt as KhLcntInit } from "@/pages/construction/kh-lcnt-init/ConstructionInitializer";
import { KhLcnt } from "@/pages/construction/kh-lcnt/Detail";
import KqKhLcnt from "@/pages/construction/kq-kh-lcnt";
import Bcktkt from "@/pages/construction/bcktkt";
import { List } from "@/pages/construction/constructions-list/List";

export const constructionRoute: RouteObject = {
  path: "/cong-trinh",
  element: (
    <>
      <Period_Nav />
      <Outlet />
    </>
  ),
  children: [
    {
      index: true,
      element: <List />,
    },
    {
      path: "tao-moi",
      element: <KhLcntInit.Create />,
      action: (args) =>
        import("../pages/construction/kh-lcnt-init/action").then((m) =>
          m.initConstructionAction(args),
        ),
    },

    {
      path: "kh-lcnt/:con-id",
      element: <KhLcnt.Detail />,
      action: (args) =>
        import("../pages/construction/kh-lcnt/action").then((m) =>
          m.editAction(args),
        ),
    },

    {
      path: "kq-kh-lcnt/:con-id",
      element: <Outlet />,
      children: [
        {
          index: true,
          element: <KqKhLcnt.Detail />,
        },
        {
          path: "tao-moi",
          element: <KqKhLcnt.Create />,
        },
        {
          path: "tao-moi/tv",
          action: (args) =>
            import("../pages/construction/kq-kh-lcnt/actions/create-action").then(
              (m) => m.createTvAction(args),
            ),
        },
        {
          path: "tao-moi/tt",
          action: (args) =>
            import("../pages/construction/kq-kh-lcnt/actions/create-action").then(
              (m) => m.createTtAction(args),
            ),
        },
        {
          path: "chinh-sua/tv",
          action: (args) =>
            import("../pages/construction/kq-kh-lcnt/actions/edit-action").then(
              (m) => m.editTvAction(args),
            ),
        },
        {
          path: "chinh-sua/tt",
          action: (args) =>
            import("../pages/construction/kq-kh-lcnt/actions/edit-action").then(
              (m) => m.editTtAction(args),
            ),
        },
      ],
    },

    {
      path: "bcktkt/:con-id",
      element: <Outlet />,
      children: [
        {
          index: true,
          element: <Bcktkt.Detail />,
        },
        {
          path: "tao-moi",
          element: <Bcktkt.Create />,
          action: (args) =>
            import("../pages/construction/bcktkt/actions/create-action").then(
              (m) => m.createBcktktAction(args),
            ),
        },
        {
          path: "chinh-sua",
          action: (args) =>
            import("../pages/construction/bcktkt/actions/edit-action").then(
              (m) => m.editBcktktAction(args),
            ),
        },
      ],
    },
  ],
};
