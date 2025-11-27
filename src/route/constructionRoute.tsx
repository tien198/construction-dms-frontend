import type { RouteObject } from "react-router";
import ConstructionPage from "../page/construction/Construction";

export const constructionRoute: RouteObject = {
  path: "cong-trinh",

  children: [
    {
      path: "them",
      element: <ConstructionPage />,
      action: (args) =>
        import("../page/construction/action").then((m) =>
          m.addConstruction(args)
        ),
    },
  ],
};
