import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next).*)", { source: "/" }],
};
