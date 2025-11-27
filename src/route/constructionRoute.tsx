import type { RouteObject } from "react-router";
import ConstructionPage from "../page/construction/create/ConstructionCreate";
import ConstructionList from "../page/construction/list/ConstructionList";
import ConstructionDetail from "../page/construction/detail/ConstructionDetail";

export const constructionRoute: RouteObject = {
  path: "cong-trinh",

  children: [
    {
      index: true,
      element: <ConstructionList />,
      loader: () =>
        import("../page/construction/list/loader").then((m) => m.loader()),
    },
    {
      path: ":id",
      element: <ConstructionDetail />,
      loader: (args) =>
        import("../page/construction/detail/loader").then((m) =>
          m.loader(args)
        ),
    },
    {
      path: "them",
      element: <ConstructionPage />,
      action: (args) =>
        import("../page/construction/create/action").then((m) =>
          m.addConstruction(args)
        ),
    },
  ],
};
