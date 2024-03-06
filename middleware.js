import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImR1bW15QGdtYWlsLmNvbSIsImV4cCI6MTcxMDA0NzU4Mn0.EXAte1WNrmIVtfcstzH1ly1vm7mcMCthejVM0qXF3go";
  //const token = await request.headers.get("Authorization")?.split(" ")[i];

  if (!token) {
    return NextResponse.json({ message: "トークンがありません" });
  }

  try {
    const secretKey = new TextEncoder().encode("nextjs-fullstack-app-practice");
    const decodedJwt = await jwtVerify(token, secretKey);

    return NextResponse.next();
  } catch (err) {
    return NextResponse.json({
      message: "トークンが正しくないので、ログインしてください",
    });
  }
}

export const config = {
  matcher: [
    "/api/item/create",
    "/api/item/update/:path*",
    "/api/item/delete/:path*",
  ],
};
