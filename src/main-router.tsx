import { createBrowserRouter } from "react-router-dom";
import MainPage from "./routes/MainPage";
import SignPage from "./routes/sign/page";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import BoardLayout from "./routes/layout";
import StoreItems from "./routes/storeItem/page";
import StoreUrl from "./routes/StoreUrl/StoreUrl";
import BucketDetailPage from "./routes/bucketDetail/page";
import UserPage from "./routes/user/page";
import UpdatePage from "./routes/update/page";
import HotPage from "./routes/hot/page";
import LikePage from "./routes/like/page";
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
        path: "hot",
        element: <HotPage />,
        index: true,
      },
      {
        path: "now",
        element: <UpdatePage />,
        index: true,
      },
      {
        path: "like",
        element: <LikePage />,
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
    path: "/storeItem",
    element: <StoreItems />,
    index: true,
  },
  {
    path: "/storeUrl",
    element: <StoreUrl />,
    index: true,
  },
  {
    path: "/bucketlist/:bucketId",
    element: <BucketDetailPage />,
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
  {
    path: "/user/:userId",
    element: <BoardLayout />,
    children: [
      {
        path: "",
        element: <UserPage />,
        index: true,
      },
    ],
    // index: true,
  },
];
const router = createBrowserRouter(routers);

export default router;
