import ScrollSpyComponent from "@/components/ScrollSpy/scrollspy";
import Cart from "@/components/cart";
import React from "react";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
export default async function  Home() {
  const { isAuthenticated , getUser  } = getKindeServerSession();

  if (!( await isAuthenticated())) {
    return redirect("/api/auth/login?post_login_redirect_url=http://localhost:3000/callback");
  }
  const user = await getUser();

  const data = [
    {
      id: "1",
      title: "Home",
      link: "/",
    },
    {
      id: "2",
      title: "About",
      link: "/about",
    },
    {
      id: "3",
      title: "Services",
      link: "/services",
    },
    {
      id: "4",
      title: "Contact",
      link: "/contact",
    },
  ];

  console.log("test",process.env.KINDE_CLIENT_ID)
  return (
    <>
     
      <h1>{user?.email}</h1>
      
      <LogoutLink>Log out</LogoutLink>
      <ScrollSpyComponent data={data} className="hidden lg:flex lg:basis-1/5" />
      <Cart />
      <Cart />
    </>
  );
}


