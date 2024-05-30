import { showModal, closeModal } from "@/store/modal";
import { useDispatch } from "react-redux";
export default function useModal() {
  const dispatch = useDispatch();

  const close = () => {
    dispatch(closeModal());
  };

  function open(title: string, message: string, onClick: () => void) {
    dispatch(
      showModal({
        title: title,
        message: message,
        onClick: onClick,
        show: true,
      })
    );
  }
  return { open, close };
}
