import { Outlet, type RouteObject } from "react-router";
import { lazy, Suspense } from "react";
import NavigationCard from "../component/layout/Navbar";

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
      path: "",
      element: (
        <>
          <NavigationCard />
          <Outlet />
        </>
      ),
      children: [
        {
          path: ":construction-id/:decision-id",
          element: (
            <Suspense fallback={<div>loading ...</div>}>
              <Detail />
            </Suspense>
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
      ],
    },
  ],
};
