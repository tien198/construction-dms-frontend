import { Outlet, type RouteObject } from "react-router";
import { lazy, Suspense } from "react";
import NavigationCard from "../component/layout/Navbar";

const ConstructionPage = lazy(
  () => import("../page/construction/create/ConstructionCreate"),
);

const ConstructionList = lazy(
  () => import("../page/construction/list/ConstructionList"),
);
const ConstructionDetail = lazy(
  () => import("../page/construction/detail/ConstructionDetail"),
);

export const constructionRoute: RouteObject = {
  path: "cong-trinh",

  children: [
    {
      path: "them",
      element: (
        <Suspense fallback={<div>loading ...</div>}>
          <ConstructionPage />
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
          <ConstructionList />
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
          path: ":construction-id",
          element: (
            <Suspense fallback={<div>loading ...</div>}>
              <ConstructionDetail />
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
