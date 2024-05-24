import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
console.log("middleware");

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/conversation(.*)",
  "/music(.*)",
  "/image(.*)",
  "/video(.*)",
  "/code(.*)",
  "/settings(.*)",
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    auth().protect();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
