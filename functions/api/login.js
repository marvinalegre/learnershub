import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export async function onRequestPost(context) {
  const { request, env } = context;
  const { username, password } = await request.json();

  if (
    !bcrypt.compareSync(
      password,
      "$2a$08$3Z/rC1ifosVCTcbkXkRhLOZAtIdHyK9DRH3Sb5Iud0bB6khquF30C"
    )
  ) {
    return Response.json({
      success: false,
      err: "Invalid username or password",
    });
  }

  const token = jwt.sign({ username: username }, env.JWT_SECRET, {
    algorithm: "HS256",
  });

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Set-Cookie": `token=${token}; Path=/; HttpOnly; Secure; SameSite=Strict`,
    },
  });
}
