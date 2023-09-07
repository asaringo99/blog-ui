"use client"
import React from "react";
import { ArticleInput } from "@/components/modules/Articles/ArticleInput";
import { InputButtonContainer } from "./Styles";
import { Box } from '@mui/material';
import Link from "next/link";
import Template from "../Template";

export default function Home(){
  return (
    <Template>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <InputButtonContainer>
          <Link href="/create">
            <ArticleInput/>
          </Link>
        </InputButtonContainer>
      </Box>
    </Template>
  )
}