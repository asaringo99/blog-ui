'use client'
import Card from "@mui/material/Card"
import TextField from "@mui/material/TextField"
import Divider from "@mui/material/Divider"
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Typography from '@mui/material/Typography';
import { useState } from "react"
import { IconButton, Tooltip } from "@mui/material"
import { signIn } from "next-auth/react";

const VALID_EMAIL_REGEX = /^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
const VALID_PASSWORD_REGEX = /^[^<>&%\s]{6,30}$/;
const EMAIL_ERROR_MESSAGE = "有効なメールアドレスを入力してください"
const PASSWORD_ERROR_MESSAGE = "5文字以上20文字以下のパスワードを設定してください"

export default function Signin(){
  const [ isVisible, setIsVisible ] = useState(false);
  const [ isEmailError, setIsEmailError] = useState(false);
  const [ isPasswordError, setIsPasswordError] = useState(false);
  const [ email, setEmail] = useState("");
  const [ password, setPassword] = useState("");

  const handleEmailChange = (value: string) => {
    setEmail(value);
  }
  
  const handlePasswordChange = (value: string) => {
    setPassword(value);
  }

  const onSubmit = async (e: React.FormEvent) => {
    VALID_EMAIL_REGEX.test(email) ? setIsEmailError(false) : setIsEmailError(true);
    VALID_PASSWORD_REGEX.test(password) ? setIsPasswordError(false) : setIsPasswordError(true);
    if(isPasswordError || isEmailError) {
      return;
    }
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        redirect: true,
        email: email,
        password: password,
        callbackUrl: "/home"
      });

      if (!res?.error) {
        return;
      }
    } catch (error: any) {
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <Box sx={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#EEEEEE'}}>
      <Box sx={{ width: '450px', height: '550px' }}>
        <CssBaseline />
        <Card sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <Avatar sx={{ m: 1, bgcolor: 'error.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography>
            SIGN IN
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '70%', padding: '10px' }}>
            <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <Tooltip
              title={EMAIL_ERROR_MESSAGE}
              open={isEmailError}
              placement='right'
              >
              <TextField
                id="input-with-sx"
                label="Email*"
                variant="standard"
                placeholder="Example@example.com"
                value={email}
                error={isEmailError}
                sx={{ width: "100%" }}
                onChange={(e) => handleEmailChange(e.target.value)}
              />
            </Tooltip>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '70%', padding: '10px' }}>
            <KeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <Tooltip
              title={PASSWORD_ERROR_MESSAGE}
              open={isPasswordError}
              placement='right-start'
            >
              <TextField
                id="input-with-sx"
                label="Password*"
                variant="standard"
                value={password}
                type={isVisible ? "text" : "password"}
                error={isPasswordError}
                sx={{ width: "100%" }}
                onChange={(e) => handlePasswordChange(e.target.value)}
              />
            </Tooltip>
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
              onClick={onSubmit}
            >
              <Typography>
                SIGN IN
              </Typography>
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
              <Typography>
                CONTINUE WITH GOOGLE
              </Typography>
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
              <Typography>
                CONTINUE WITH GITHUB
              </Typography>
            </Button>
          </Box>
        </Card>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="/signup" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}