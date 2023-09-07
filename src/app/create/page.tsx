"use client"
import * as React from "react";
import { Button } from "@/components/base/Button";
import TextField from "@/components/base/Textfield";
import WrapperContainer from "@/components/base/Wrapper";
import MarkdownEditor from "@/components/organism/Markdown/Markdown";
import Template from "../Template";

export default function Create(){  
  return (
    <Template>
      <WrapperContainer>
        <TextField fontSize="large" label="Title"/>
      </WrapperContainer>
      <MarkdownEditor/>
      <WrapperContainer>
        <Button label="Create" primary="black" size="large"/>
      </WrapperContainer>
    </Template>
  )
}