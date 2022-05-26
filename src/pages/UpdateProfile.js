import React, {useRef, useState} from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";






const theme = createTheme();

export default function UpdateProfile(props) {

  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const {currentUser, updatePassword, updateEmail} = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const homePage = () => navigate('/')
  

function handleSubmit(e){
    e.preventDefault()

    if(passwordRef.current.value !== passwordConfirmRef.current.value){
      return setError('Passwords do not match')
    }

    const promises = []
    setLoading(true)
    setError('')
    if(emailRef.current.value !== currentUser.email){
        promises.push(updateEmail(emailRef.current.value))
    }

    if(passwordRef.current.value){
        promises.push(updatePassword(passwordRef.current.value))
    }


    Promise.all(promises).then(() => {
        navigate('/')
    }).catch(() => {
        setError('Failed to update account')
    }).finally(() => {
        setLoading(false)
    })
    
  }








  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {props.type ? props.type : "Update Profile"}
          </Typography>
          {error && <h2 variant='danger'>{error}</h2>}
          <Box
            component="form"
            noValidate
            // onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>

              <Grid id='email' item xs={12}>
                <input
                  ref={emailRef}
                  defaultValue={currentUser.email}
                  required
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid id='password' item xs={12}>
                <input
                  ref={passwordRef}
                  required
                  placeholder="Leave blank to keep the same"
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid id='password-confirm' item xs={12}>
                <input
                  ref={passwordConfirmRef}
                  required
                  placeholder="Leave blank to keep the same"
                  name="password"
                  label="Password-Confirmation"
                  type="password"
                  id="password-Confirmation"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
              onClick={handleSubmit}
            >
              Update
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  onClick={homePage}
                  variant="body2"
                >
                  {"Cancel"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  );
}