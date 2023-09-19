'use client'
import { useState } from "react"
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
import PersonIcon from '@mui/icons-material/Person';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Typography from '@mui/material/Typography';
import IconButton from "@mui/material/IconButton"
import Tooltip from "@mui/material/Tooltip"
import { InputAdornment } from "@mui/material"
import { signIn } from "next-auth/react";

const VALID_EMAIL_REGEX = /^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
const VALID_PASSWORD_REGEX = /^[^<>&%\s]{6,30}$/;
const VALID_USERNAME_REGEX = /^[^<>&%$~=¥|'`"\[\]\(\)\{\}\s]{3,15}$/;
const EMAIL_ERROR_MESSAGE = "有効なメールアドレスを入力してください"
const PASSWORD_ERROR_MESSAGE = "6文字以上20文字以下のパスワードを設定してください"
const USERNAME_ERROR_MESSAGE = "3文字以上15文字以下のユーザー名を設定してください"
const USERNAME_EXSIT_ERROR_MESSAGE = "既に存在するアカウント名です"
const EMAIL_EXSIT_ERROR_MESSAGE = "このメールアドレスは既に利用されています"
const USERNAME_SPECIAL_WORD_ERROR_MESSAGE = "空白や「& % $ ? # ~ = ¥ | < > ( ) [ ] { } ! ' ` \"」をユーザー名に含めることはできません"

export default function Signup(){
  const [ isVisible, setIsVisible ] = useState(false);
  const [ isEmailError, setIsEmailError] = useState(false);
  const [ isPasswordError, setIsPasswordError] = useState(false);
  const [ isUsernameError, setIsUsernameError] = useState(false);
  const [ isUserExistError, setIsUserExistError] = useState(false);
  const [ isEmailExistError, setIsEmailExistError] = useState(false);
  const [ email, setEmail] = useState("");
  const [ password, setPassword] = useState("");
  const [ username, setUsername] = useState("");

  const handleEmailChange = (value: string) => {
    setEmail(value);
  }
  
  const handlePasswordChange = (value: string) => {
    setPassword(value);
  }
  
  const handleUsernameChange = (value: string) => {
    setUsername(value);
  }

  const handleUsernameValidation = (value: string) => {
    if (value.length < 3 || value.length > 15) {
      return USERNAME_ERROR_MESSAGE;
    }
    if (!VALID_USERNAME_REGEX.test(value)) {
      return USERNAME_SPECIAL_WORD_ERROR_MESSAGE;
    }
    if (isUserExistError) {
      return USERNAME_EXSIT_ERROR_MESSAGE;
    }
    return null;
  }

  const onSubmit = async (e: React.FormEvent) => {
    VALID_EMAIL_REGEX.test(email) ? setIsEmailError(false) : setIsEmailError(true);
    VALID_PASSWORD_REGEX.test(password) ? setIsPasswordError(false) : setIsPasswordError(true);
    VALID_USERNAME_REGEX.test(username) ? setIsUsernameError(false) : setIsUsernameError(true);
    if(isPasswordError || isEmailError || isUsernameError) {
      return;
    }
    e.preventDefault();
    const data = {
      username: username,
      email: email,
      password: password,
    }
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        alert((await res.json()).message);
        return;
      }

      signIn(undefined, { callbackUrl: "/" });
    } catch (error: any) {
      console.error(error);
      alert(error.message);
    }
  }
  return (
    <Box sx={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#EEEEEE'}}>
      <Box sx={{ width: '450px', height: '600px' }}>
        <CssBaseline />
        <Card sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <Avatar sx={{ m: 1, bgcolor: 'error.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography>
            SIGN UP
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '70%', padding: '10px' }}>
            <PersonIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <Tooltip
              title={handleUsernameValidation(username)}
              open={isUsernameError}
              placement='right'
              >
              <TextField
                id="input-with-sx"
                label="Username*"
                variant="standard"
                placeholder="Taro"
                value={username}
                error={isUsernameError}
                sx={{ width: "100%" }}
                onChange={(e) => handleUsernameChange(e.target.value)}
              />
            </Tooltip>
          </Box>
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
              placement='right'
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
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
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
                    </InputAdornment>
                  ),
                }}
              />
            </Tooltip>
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
                SIGN UP
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
          <Grid item>
            <Link href="/signin" variant="body2">
              {"Have an account? Sign In"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}