import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IModal {
  show: boolean;
  title: string;
  message: string;
  onClick: () => void;
}

const initState: IModal = {
  show: false,
  title: "",
  message: "",
  onClick: () => {},
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initState,
  reducers: {
    showModal: (state, action: PayloadAction<IModal>) => {
      (state.show = true),
        (state.title = action.payload.title),
        (state.message = action.payload.message),
        (state.onClick = action.payload.onClick);
    },
    closeModal: (state) => {
      (state.show = false),
        (state.title = ""),
        (state.message = ""),
        (state.onClick = () => {});
    },
  },
});

export const { showModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
