import { createBrowserRouter } from "react-router-dom";
import MainPage from "./routes/MainPage";
import SignPage from "./routes/sign/page";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import BoardLayout from "./routes/layout";
import BucketDetailPage from "./routes/bucketDetail/page";

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
    path: "/bucketlist/:bucketId",
    element: <BucketDetailPage />
  }

];
const router = createBrowserRouter(routers);

export default router;
