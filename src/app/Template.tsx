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
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Header onLogin={onLogin} onLogout={onLogout} onCreateAccount={onCreateAccount}/>
        </Box>
        <Box sx={{ display: 'flex', height: '93%', width: '99.5%' }}>
          <Sidebar/>
          <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', width: '80%', overflowY: 'auto'  }}>
            {children}
          </Box>
        </Box>
      </PageContainer>
    </ThemeProvider>
  )
}