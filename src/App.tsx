import { RouterProvider } from "react-router-dom";
import MainRouter from "./main-router";
import { Provider } from "react-redux";
import store from "./store/store";
import ToastContainer from "./components/ToastContainer/ToastContainer";
import CommonPopup from "./components/CommonPopup";

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <CommonPopup />
      <RouterProvider router={MainRouter}></RouterProvider>
    </Provider>
  );
}

export default App;
