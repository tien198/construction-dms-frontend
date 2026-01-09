import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { constructionRoute } from "./route/constructionRoute";
import { ThemeProvider } from "@mui/material";
import { theme } from "./lib/mui-theme/theme";

const router = createBrowserRouter([
  {
    path: "/",
    children: [constructionRoute],
  },
]);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
