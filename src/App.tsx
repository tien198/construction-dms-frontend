import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { constructionRoute } from "./route/constructionRoute";

const router = createBrowserRouter([
  {
    path: "/",
    children: [constructionRoute],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
