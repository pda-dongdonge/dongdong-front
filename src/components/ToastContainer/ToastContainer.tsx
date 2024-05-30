import usePortal from "@/hooks/usePortal";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { removeToast } from "@/store/toastPopup";
import { useEffect } from "react";
import Toast from "./Toast";

export default function ToastContainer() {
    const dispatch = useDispatch();
    const portalRoot = usePortal("toast-portal");
    const toastList = useSelector((state: RootState) => state.toast.popupList);
    console.log("ToastContainer의 toastList : ", toastList);
    
  useEffect(() => {
    const timeouts = toastList.map((toast) =>
      setTimeout(() => {
        dispatch(removeToast(toast.id));
      }, 1000)
    );

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, [toastList, dispatch]);

  return portalRoot
    ? ReactDOM.createPortal(
        <div className="fixed w-11/12 max-w-xs bottom-3 left-1/2 -translate-x-1/2 space-y-3 rounded-[10px]">
          {toastList.map((toast) => (
            <Toast key={toast.id} message={toast.message} />
          ))}
        </div>,
        portalRoot
      )
    : null;
}
