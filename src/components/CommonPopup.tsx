import { RootState } from "@/store/store";
import React, { useEffect } from "react";
import { closeModal } from "@/store/modal";
import { useDispatch, useSelector } from "react-redux";
import "./modal.css";
export default function CommonPopup() {
  const dispatch = useDispatch();
  const modal = useSelector((state: RootState) => state.modal);
  const close = (e) => {
    if (e.target.classList.contains("main-modal")) {
      dispatch(closeModal());
    }
  };

  useEffect(() => {
    if (modal.show) {
      // 모달이 열리면 body의 overflow를 hidden으로 설정하여 배경 스크롤을 막음
      document.body.style.overflow = "hidden";
    } else {
      // 모달이 닫히면 body의 overflow를 auto로 설정하여 배경 스크롤을 허용함
      document.body.style.overflow = "auto";
    }

    // 클린업 함수: 모달이 언마운트될 때 overflow를 auto로 설정하여 배경 스크롤을 허용함
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modal.show]);

  if (!modal.show) return null;

  return (
    <div
      className="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
      style={{ background: "rgba(0,0,0,.7)", zIndex: "10000" }}
      onClick={close}
    >
      <div className="border border-teal-500 shadow-lg modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold">{modal.title}</p>
            <div
              className="modal-close cursor-pointer z-50"
              onClick={() => dispatch(closeModal())}
            >
              <svg
                className="fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
              </svg>
            </div>
          </div>
          <div className="my-3 text-center">
            <p>{modal.message}</p>
          </div>

          <div className="flex justify-center pt-2">
            <button
              onClick={() => modal.onClick()}
              className="focus:outline-none px-4 bg-teal-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400"
            >
              확인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
