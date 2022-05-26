
import React, {useRef, useState} from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
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

export default function Login(props) {

  const emailRef = useRef()
  const passwordRef = useRef()
  const {login, isLogin} = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
 

  
  const navigate = useNavigate()

  const signUpPage = () => navigate('/Signup')
  const forgotPasswordPage = () => navigate('/ForgotPassword')

  async function handleSubmit(e){
    e.preventDefault()



    try {
      setError('')
      setLoading(true)
     await login(emailRef.current.value, passwordRef.current.value )

     localStorage.setItem('show', true )
     navigate('/')
    } catch {
      setError('Falied to log in')
    }

    setLoading(false)
    
  }







  // const handleSubmitX = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });
  // };





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
            {props.type ? props.type : "Log In"}
          </Typography>
          {error && <h2 variant='danger'>{error}</h2>}
          {/* {currentUser.email} */}
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
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
              onClick={handleSubmit}
            >
              Log In
            </Button>
            <Grid container justifyContent="flex-end"> 
            <Grid style={{paddingRight: '20px'}} item>
              <Link
                    onClick={forgotPasswordPage}
                    variant="body2"
                   >
                     {"Forgot Password?"}
                   </Link>
                </Grid>
                <Grid item>
              <Link
                    onClick={signUpPage}
                    variant="body2"
                   >
                     {"Don't have an account? Sign Up"}
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

































































// import * as React from "react";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
// import Paper from "@mui/material/Paper";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Typography from "@mui/material/Typography";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import {Navigate, useLocation, useNavigate} from 'react-router-dom';



// function Copyright(props) {


  
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// const theme = createTheme();

// export default function SignIn(props) {
//   const navigate = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get("email"),
//       password: data.get("password"),
//     });
//   };


//   const forgotPassPage = () => navigate('/forgotPassword', {replece: true})
//   const signUpPage = () => navigate('/Signup')

//   return (
//     <ThemeProvider theme={theme}>
//       <Grid container component="main" sx={{ height: "100vh" }}>
//         <CssBaseline />
//         <Grid
//           item
//           xs={false}
//           sm={4}
//           md={7}
//           sx={{
//             backgroundImage: "url(https://source.unsplash.com/random)",
//             backgroundRepeat: "no-repeat",
//             backgroundColor: (t) =>
//               t.palette.mode === "light"
//                 ? t.palette.grey[50]
//                 : t.palette.grey[900],
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         />
//         <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//           <Box
//             sx={{
//               my: 8,
//               mx: 4,
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//             }}
//           >
//             <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
//               <LockOutlinedIcon />
//             </Avatar>
//             <Typography component="h1" variant="h5">
//               Sign in
//             </Typography>
//             <Box
//               component="form"
//               noValidate
//               onSubmit={handleSubmit}
//               sx={{ mt: 1 }}
//             >
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//                 autoFocus
//               />
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//               />

//               <FormControlLabel
//                 control={<Checkbox value="remember" color="primary" />}
//                 label="Remember me"
//               />

//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//               >
//                 Sign In
//               </Button>
//               <Grid container>
//                 <Grid item xs>
//                   <Link onClick={forgotPassPage} variant="body2">
//                     Forgot password?
//                   </Link>
              
//                 </Grid>
//                 <Grid item>
//                   <Link
//                     onClick={signUpPage}
//                     variant="body2"
//                   >
//                     {"Don't have an account? Sign Up"}
//                   </Link>
//                 </Grid>
//               </Grid>
//               <Copyright sx={{ mt: 5 }} />
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     </ThemeProvider>
//   );
// }
