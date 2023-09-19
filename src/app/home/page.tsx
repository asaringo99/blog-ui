import React from "react";
import Template from "@/components/layouts/Template/Template";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Home(){
  const session = await getServerSession(authOptions);
  return (
    <Template>
      <h1>{`ようこそ！${session?.user?.name} さん!`}</h1>
    </Template>
  )
}