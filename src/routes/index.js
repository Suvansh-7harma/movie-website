import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ExplorePage from "../pages/ExplorePage";
import DetailsPage from "../pages/DetailsPage";
import SearchPage from "../pages/SearchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: ":explore", // Matches routes like /movie or /tv
        element: <ExplorePage />,
      },
      {
        path: ":explore/:id", // Matches routes like /movie/123 or /tv/456
        element: <DetailsPage />,
      },
      {
        path: "search", // Matches /search
        element: <SearchPage />,
      },
    ],
  },
]);

export default router;
