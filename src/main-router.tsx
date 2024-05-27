import { createBrowserRouter } from "react-router-dom";
import MainPage from "./routes/MainPage";
import SignPage from "./routes/sign/page";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import BoardLayout from "./routes/layout";
import UpdatePage from "./routes/update/page";
const routers = [
  {
    path: "/",
    element: <BoardLayout />,
    children: [
      {
        path: "",
        element: <MainPage />,
        index: true,
      },
      {
        path: "update",
        element: <UpdatePage />,
        index: true,
      },
      
    ],
  },
  {
    path: "/sign",
    element: <BoardLayout />,
    children: [
      {
        path: "",
        element: <SignPage />,
        index: true,
      },
    ],
    // index: true,
  },
  {
    path: "/trend",
    element: <BoardLayout />,
    children: [
      {
        path: "",
        element: <SignPage />,
        index: true,
      },
    ],
    // index: true,
  },

];
const router = createBrowserRouter(routers);

export default router;
