import { createBrowserRouter } from "react-router-dom";
import MainPage from "./routes/MainPage";
import SignPage from "./routes/sign/page";
const routers = [
  {
    path: "/",
    element: <MainPage />,
    // index: true,
  },
  {
    path: "/sign",
    element: <SignPage />,
    // index: true,
  },
];
const router = createBrowserRouter(routers);

export default router;
