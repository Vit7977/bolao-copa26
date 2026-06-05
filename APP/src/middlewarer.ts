// import { MiddlewareConfig, NextRequest, NextResponse } from "next/server";
// import { jwtDecode } from "jwt-decode";

// const publicRoutes = [
//   { path: "/login", whenAuthenticated: "redirect" },
//   { path: "/cadastrar", whenAuthenticated: "redirect" },
// ] as const;

// const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = "/login";

// interface TokenPayload {
//   exp?: number;
// }

// export function middleware(request: NextRequest) {
//   const path = request.nextUrl.pathname;

//   const publicRoute = publicRoutes.find((route) => route.path === path);
//   const authToken = request.cookies.get("token")?.value;

//   if (!authToken && publicRoute) {
//     return NextResponse.next();
//   }

//   if (!authToken && !publicRoute) {
//     const redirectUrl = request.nextUrl.clone();
//     redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE;
//     return NextResponse.redirect(redirectUrl);
//   }

//   if (
//     authToken &&
//     publicRoute &&
//     publicRoute.whenAuthenticated === "redirect"
//   ) {
//     const redirectUrl = request.nextUrl.clone();

//     redirectUrl.pathname = "/";

//     return NextResponse.redirect(redirectUrl);
//   }

//   if (authToken && !publicRoute) {
//   try {
//     const decoded = jwtDecode<TokenPayload>(authToken);

//     if (!decoded.exp) {
//       throw new Error("Token inválido");
//     }

//     const currentTime = Date.now() / 1000;

//     if (decoded.exp < currentTime) {
//       throw new Error("Token expirado");
//     }

//     return NextResponse.next();
//   } catch {
//     const redirectUrl = request.nextUrl.clone();

//     redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE;

//     const response = NextResponse.redirect(redirectUrl);

//     response.cookies.delete("token");

//     return response;
//   }
// }
//   return NextResponse.next();
// }

// export const config: MiddlewareConfig = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - api (API routes)
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      */
//     "/((?!api|_next/static|_next/image|favicon.ico).*)",
//   ],
// };