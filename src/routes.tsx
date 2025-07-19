import { RouteObject } from "react-router-dom";
import ContentPage from "./pages/ContentPage";
import HomePage from "./pages/HomePage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/content",
    element: <ContentPage />,
  },
];

export default routes;
