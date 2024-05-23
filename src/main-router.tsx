import { createBrowserRouter } from "react-router-dom";
import MainPage from "./routes/MainPage";

const routers = [
  {
    path: "/",
    element: <MainPage />,
    // index: true,
  },
];
const router = createBrowserRouter(routers);

export default router;
