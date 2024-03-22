import NextAuth from "next-auth"
import authConfig from "@/auth.config"

const {auth} = NextAuth(authConfig)

import { PublicRoutes,AuthRoutes,ApiAuthPrefix,DEFAULT_LOGIN_REDIRECT } from "@/routes"

export default auth((req) => {

  const isLoggedIn = !!req.auth
  const {nextUrl} = req

  // console.log("ROUTE: ",req.nextUrl.pathname)
   console.log("is Logged In: ",isLoggedIn)
 
  const isApiAuthRoute = nextUrl.pathname.startsWith(ApiAuthPrefix)
 const isPublicRoute = PublicRoutes.includes(nextUrl.pathname)
 const isAuthRoute = AuthRoutes.includes(nextUrl.pathname)
//allow every single api routes
 if(isApiAuthRoute){
  return undefined
 }
//make sure you can access your api routes
 if(isAuthRoute){
  if (isLoggedIn){
    return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT,nextUrl))
  }
  return undefined
 }

 if(!isLoggedIn && !isPublicRoute){
  return Response.redirect(new URL("/auth/login",nextUrl))
 }

 return undefined


})

// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}