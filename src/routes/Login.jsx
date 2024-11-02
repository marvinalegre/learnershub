import { Form } from "react-router-dom";

export async function action({ request }) {
  const formData = await request.formData();
  console.log(formData.get("username")); ////////////

  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify({
      username: formData.get("username"),
      password: formData.get("password"),
    }),
  });
  const { success, err } = await res.json();

  if (success) {
    return redirect("/admin");
  }

  return { err };
}

export default function Login() {
  return (
    <Form method="POST">
      <label htmlFor="username">username:</label>
      <input
        name="username"
        id="username"
        type="text"
        minLength={3}
        maxLength={30}
        required
      />
      <br />
      <label htmlFor="password">password:</label>
      <input
        name="password"
        id="password"
        type="password"
        minLength={12}
        maxLength={30}
        required
      />
      <br />
      <button type="submit">login</button>
    </Form>
  );
}
