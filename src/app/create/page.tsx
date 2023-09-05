"use client"
import { Button } from "@/components/base/Button";
import TextField from "@/components/base/Textfield";
import WrapperContainer from "@/components/base/Wrapper";
import { Header } from "@/components/layouts/Header/Header";
import MarkdownEditor from "@/components/organism/Markdown/Markdown";
import Link from "next/link";
import React, { use, useState } from "react";
import { InputButtonContainer } from "../home/Styles";

export default function Create(){
	const onLogin = () => {}
	const onLogout = () => {}
	const onCreateAccount = () => {}
  
  return (
    <div className="">
      <Header onLogin={onLogin} onLogout={onLogout} onCreateAccount={onCreateAccount}/>
      <WrapperContainer>
        <TextField label="Title"></TextField>
      </WrapperContainer>
      <MarkdownEditor/>
      <WrapperContainer>
        <Button label="Create" primary="black" size="large"/>
      </WrapperContainer>
    </div>
  )
}