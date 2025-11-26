import { createBrowserRouter, Outlet } from "react-router";
import { RouterProvider } from "react-router/dom";
import ConstructionPage from "./page/Construction";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "/them-cong-trinh",
        element: <ConstructionPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
