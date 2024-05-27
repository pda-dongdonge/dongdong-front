import { createBrowserRouter } from "react-router-dom";
import MainPage from "./routes/MainPage";
import SignPage from "./routes/sign/page";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import BoardLayout from "./routes/layout";
import StoreItems from "./routes/storeItem/page";
import StoreUrl from "./routes/StoreUrl/StoreUrl";
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
    path:"/storeItem",
    element:<StoreItems/>,
    index: true,
  }
  ,
  {
    path:"/storeUrl",
    element:<StoreUrl/>,
    index:true
  }

];
const router = createBrowserRouter(routers);

export default router;
