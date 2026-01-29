import { type RouteObject } from "react-router";
import { lazy, Suspense } from "react";
import PeriodNavigator from "../page/construction/detail/comp/PeriodNavbar";

const CreatePage = lazy(() => import("../page/construction/create/Create"));

const List = lazy(() => import("../page/construction/list/ConstructionList"));
const Detail = lazy(() => import("../page/construction/detail/Detail"));

export const constructionRoute: RouteObject = {
  path: "cong-trinh",

  children: [
    {
      path: "them",
      element: (
        <Suspense fallback={<div>loading ...</div>}>
          <CreatePage />
        </Suspense>
      ),
      action: (args) =>
        import("../page/construction/create/action").then((m) =>
          m.addConstruction(args),
        ),
    },
    {
      index: true,
      element: (
        <Suspense fallback={<div>loading ...</div>}>
          <List />
        </Suspense>
      ),
      loader: () =>
        import("../page/construction/list/loader").then((m) => m.loader()),
    },
    {
      path: ":construction-id/:period",
      element: (
        <>
          <PeriodNavigator />
          <Suspense fallback={<div>loading ...</div>}>
            <Detail />
          </Suspense>
        </>
      ),
      loader: (args) =>
        import("../page/construction/detail/loader").then((m) =>
          m.loader(args),
        ),
      action: (args) =>
        import("../page/construction/detail/action").then((m) =>
          m.action(args),
        ),
    },
    {
      path: "appove/:decision-id",
      action: (args) =>
        import("../page/construction/api-action/appove.action").then((m) =>
          m.appoveAction(args),
        ),
    },
    {
      path: "print/:decision-id",
      action: (args) =>
        import("../page/construction/api-action/print.action").then((m) =>
          m.printAction(args),
        ),
    },
  ],
};
