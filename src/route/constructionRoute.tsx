import type { RouteObject } from "react-router";
import { lazy, Suspense } from "react";
import PeriodNavigator from "../page/construction/detail/comp/PeriodNavbar";

const CreatePage = lazy(() => import("../page/construction/create/CreatePage"));

const List = lazy(() => import("../page/construction/list/ConstructionList"));
const DetailPage = lazy(() => import("../page/construction/detail/DetailPage"));

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
            <DetailPage />
          </Suspense>
        </>
      ),
    },
    {
      path: "approve",
      action: (args) =>
        import("../page/construction/api-action/appove.action").then((m) =>
          m.appoveAction(args),
        ),
    },
    {
      path: "gen-doc",
      action: (args) =>
        import("../page/construction/api-action/gen-docx.action").then((m) =>
          m.genDocXxAction(args),
        ),
    },
  ],
};
