import { Outlet, useLoaderData } from "react-router-dom";
import NavBar from "../components/NavBar";

export async function loader() {
  const res = await fetch("/api/user");
  const { loggedIn } = await res.json();

  return { loggedIn };
}

export default function Root() {
  const { loggedIn } = useLoaderData();

  return (
    <>
      <NavBar loggedIn={loggedIn} />
      <Outlet />
    </>
  );
}
