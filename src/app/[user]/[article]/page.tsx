"use client"
import React from "react";
import { Box, Divider, List, ListItem } from '@mui/material';
import { useArticleActions } from "@/state/slice/article/hook";
import { renderArticles } from "./ArticlesPreview";
import Template from "@/components/layouts/Template/Template";

export default function Articles(){
  const {
    articles,
    deleteArticles,
  } = useArticleActions();
  return (
    <Template>
      <Box sx={{ width: '80%', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        {`投稿した記事の数: ${articles.contents.length}`}
      </Box>
      <Box sx={{ width: '80%', display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
        {articles.contents.map((article, index) => renderArticles(index, article))}
      </Box>
    </Template>
  )
}