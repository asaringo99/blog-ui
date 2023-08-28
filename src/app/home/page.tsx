"use client"
import React from "react";
import { Header } from "@/components/layouts/Header/Header";
import { ArticleInput } from "@/components/modules/Articles/ArticleInput";
import { PageContainer } from "./Styles";

export default function Home(){
	const onLogin = () => {}
	const onLogout = () => {}
	const onCreateAccount = () => {}
  
  return (
    <div>
      <Header onLogin={onLogin} onLogout={onLogout} onCreateAccount={onCreateAccount}/>
      <PageContainer>
        <ArticleInput/>
      </PageContainer>
    </div>
  )
}