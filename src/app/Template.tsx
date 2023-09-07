"use client"
import React from "react";
import { Header } from "@/components/layouts/Header/Header";
import { PageContainer } from "./Styles";
import Sidebar from "@/components/layouts/Sidebar/Sidebar";
import { Box, createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme();

export default function Template({
  children,
}: {
  children: React.ReactNode
}) {
	const onLogin = () => {}
	const onLogout = () => {}
	const onCreateAccount = () => {}
  
  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <Header onLogin={onLogin} onLogout={onLogout} onCreateAccount={onCreateAccount}/>
        <Box sx={{ display: 'flex', height: '100%' }}>
          <Sidebar/>
          <Box sx={{ flexGrow: 1 }}>
            {children}
          </Box>
        </Box>
      </PageContainer>
    </ThemeProvider>
  )
}