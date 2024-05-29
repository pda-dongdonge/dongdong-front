import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { RootState } from "./store";

const { TOAST_AVAILABLE_TIME } = import.meta.env;

interface Toast{
    id: number;
    message: string;
    // type: "alert" | "success" | "default"; //toast 테마
    //복사 성공 알림 외에 다른 용도로도 사용된다면 활성화
}

interface ToastPopup {
    popupList: Toast[];
}

const initialState: ToastPopup = {
    popupList: []
};

const toastSlice = createSlice({
    name: "toast",
    initialState: initialState,
    reducers: {
        showToast: (state, action: PayloadAction<Toast>) => {
            const newToast:Toast = {
                id: action.payload.id || Date.now(),
                message: action.payload.message
            };

            // 새로운 toast 추가
            state.popupList = [...state.popupList, newToast];
            console.log(state.popupList);

            // 일정 시간 후 toastList에서 삭제
            setTimeout(() => {
                state.popupList = state.popupList.filter((toast)=>toast.id !== newToast.id);
                // setToastList((currentList) => currentList.filter((toast) => toast.id !== newToast.id));
              }, TOAST_AVAILABLE_TIME);              

        },
    }
})

export const {
    showToast
} = toastSlice.actions;
export default toastSlice.reducer;