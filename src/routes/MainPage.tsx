import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { setUser, clearUser } from "../store/actions";

export default function MainPage() {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user);

  const handleLogin = () => {
    dispatch(setUser({ email: "user@example.com", name: "gariguri" }));
  };

  const handleLogout = () => {
    dispatch(clearUser());
  };

  return (
    <>
      <h1>MainPage</h1>
      <button
        className="rounded-md px-4 py-2 border-2 m-2"
        onClick={() => {
          handleLogin();
        }}
      >
        set user info
      </button>
      <button
        className="rounded-md px-4 py-2 border-2 m-2"
        onClick={() => {
          handleLogout();
        }}
      >
        log out(delete user info)
      </button>
      <p className="font-medium text-blue-500">{user.name}</p>
      <p className="font-medium text-blue-500">{user.email}</p>
    </>
  );
}
