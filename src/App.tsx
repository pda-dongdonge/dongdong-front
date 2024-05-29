import { RouterProvider } from "react-router-dom";
import MainRouter from "./main-router";
import { Provider } from "react-redux";
import store from "./store/store";
import ToastContainer from "./components/ToastContainer/ToastContainer";

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <RouterProvider router={MainRouter}></RouterProvider>
    </Provider>
  );
}

export default App;
