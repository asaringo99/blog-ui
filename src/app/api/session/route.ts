import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../../lib/auth";

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  console.log(session);

  return NextResponse.json({
    authenticated: !!session,
    session,
  });
}
