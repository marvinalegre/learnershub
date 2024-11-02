export async function loader() {
  const res = await fetch("/api/user");
  const { loggedIn } = await res.json();

  if (loggedIn) return null;

  return redirect("/");
}

export default function AdminPage() {
  return <p>admin page</p>;
}
