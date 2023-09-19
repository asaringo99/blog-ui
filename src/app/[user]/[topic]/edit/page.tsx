"use client"
import * as React from "react";
import TextField from "@/components/base/Textfield";
import MarkdownEditor from "@/components/organism/Markdown/Markdown";
import Tag from "@/components/organism/Tags/Tag";
import { Box } from "@mui/material";
import Template from "@/components/layouts/Template/Template";
import { useArticleActions } from "@/state/slice/article/hook";

export default function Edit({ params }: { params: { user: string, topic: string } }){
  const { article, updateArticleTitle } = useArticleActions();
  return (
    <Template>
      <Box sx={{ width: '80%', padding: '20px'}}>
        <TextField fontSize="large" labelSize="large" label="Title" text={article.title} updateText={updateArticleTitle}/>
      </Box>
      <Box sx={{ width: '100%'}}>
        <Tag />
      </Box>
      <Box sx={{ width: '90%', padding: '20px'}}>
        <MarkdownEditor />
      </Box>
    </Template>
  )
}