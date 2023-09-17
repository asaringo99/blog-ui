'use client'
import Card from "@mui/material/Card"
import TextField from "@mui/material/TextField"
import Divider from "@mui/material/Divider"
import Box from "@mui/system/Box"
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import AccountCircle from "@mui/icons-material/AccountCircle";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Input from '@mui/material/Input';
import { useState } from "react"
import { IconButton } from "@mui/material"

export default function SigninForm(){
  const [ isVisible, setIsVisible ] = useState(false);
  return (
    <Box sx={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'peru'}}>
      <Box sx={{ width: '450px', height: '550px' }}>
        <Card sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <AccountCircle fontSize="large"/>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '70%', padding: '10px' }}>
            <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              label="E-mail"
              variant="standard"
              placeholder="Example@example.com"
              sx={{ width: "100%" }}
            />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '70%', padding: '10px' }}>
            <KeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              label="Password"
              variant="standard"
              type={isVisible ? "text" : "password"}
              sx={{ width: "100%" }}
            />
            {
              isVisible ?
                <IconButton size="small" onClick={() => setIsVisible(false)}>
                  <Visibility sx={{ color: 'action.active' }} />
                </IconButton>
                :
                <IconButton size="small" onClick={() => setIsVisible(true)}>
                  <VisibilityOff sx={{ color: 'action.active' }} />
                </IconButton>
            }
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '70%', padding: '20px' }}>
            <Button
              component="label"
              variant="contained"
              color="info"
              sx={{ padding: '10px', width: '100%' }}
            >
              SIGN IN
            </Button>
          </Box>
          <Box sx={{ width: '100%', position: 'relative', paddingBottom: "20px", paddingTop: "10px" }}>
            <Box sx={{ position: 'absolute', left: '50%', bottom:'40%', fontWeight: 'bolder' }}>
              or
            </Box>
            <Divider />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '70%', padding: '10px' }}>
            <Button
              component="label"
              variant="contained"
              startIcon={<GoogleIcon fontSize='large'/>}
              color="success"
              sx={{ padding: '15px', width: '100%' }}
              >
              CONTINUE WITH GOOGLE
            </Button>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '70%', padding: '10px' }}>
            <Button
              component="label"
              variant="contained"
              startIcon={<GitHubIcon fontSize='large'/>}
              color="secondary"
              sx={{ padding: '15px', width: '100%' }}
            >
              CONTINUE WITH GITHUB
            </Button>
          </Box>
        </Card>
      </Box>
    </Box>
  )
}