"use client"
import React from "react";
import { Header } from "@/components/layouts/Header/Header";
import { ArticleInput } from "@/components/modules/Articles/ArticleInput";
import { InputButtonContainer, PageContainer } from "./Styles";
import Sidebar from "@/components/layouts/Sidebar/Sidebar";
import { Box, createTheme, ThemeProvider } from '@mui/material';
import Link from "next/link";

const theme = createTheme();

export default function Home(){
	const onLogin = () => {}
	const onLogout = () => {}
	const onCreateAccount = () => {}

  const moveEditPage = () => {
  }
  
  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
          <Header onLogin={onLogin} onLogout={onLogout} onCreateAccount={onCreateAccount}/>
          <Box sx={{ display: 'flex', height: '100%' }}>
            <Sidebar/>
            <Box sx={{ flexGrow: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <InputButtonContainer>
                <Link href="/create">
                  <ArticleInput onClick={moveEditPage}/>
                </Link>
                </InputButtonContainer>
              </Box>
            </Box>
          </Box>
      </PageContainer>
    </ThemeProvider>
  )
}