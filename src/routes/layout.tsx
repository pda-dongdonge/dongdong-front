import { Container } from "react-bootstrap";
import MyNavbar from "../components/MyNavbar/MyNavbar";
import { Outlet } from "react-router-dom";

export default function BoardLayout() {
  return (
    <>
      <MyNavbar />
      <div className="flex flex-col min-h-screen w-full">
        <Outlet />
      </div>
    </>
  );
}
