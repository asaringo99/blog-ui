"use client"
import React from "react";
import { Box, Divider, List, ListItem } from '@mui/material';
import { useArticleActions } from "@/state/slice/article/hook";
import Template from "@/components/layouts/Template/Template";

export default function Home({ params }: { params: { user: string } }){
  return (
    <Template>
      <h1>{`ようこそ！${params.user} さん!`}</h1>
    </Template>
  )
}