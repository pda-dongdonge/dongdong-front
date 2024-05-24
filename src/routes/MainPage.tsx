import { useAuth } from "../hooks/useAuth";

export default function MainPage() {
  const { user } = useAuth();

  return (
    <>
      <h1>MainPage</h1>
      {user.username && (
        <p className="font-medium text-blue-500">{user.username}님 접속중</p>
      )}
    </>
  );
}
