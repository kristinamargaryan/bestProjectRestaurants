import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Link from "@mui/material/Link";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from  "@mui/icons-material/LinkedIn";
import TwitterIcon from  "@mui/icons-material/Twitter";
import { db } from "../../firebase";
import Button from '@material-ui/core/Button';
import SendIcon from '@mui/icons-material/Send';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 'auto',
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  box: {
    display: 'flex',
    
  },
  box2: {
    paddingRight: '5px',
    paddingBottom: '10px',
  },
  form_left: {
    width: '100%',
    maxWidth:'700px',
    display:  'flex',
    flexDirection: 'column',
  },
  input:{
    fontSize:'18px',
    height: '30px',
    width:"330px",
  },
  inputs:{
    display:'flex',
    justifyContent: 'space-between',
    padding:'3px'
  
  },
  textarea:{
  fontSize: "1.5em",
  maxWidth:'700px',
  minWidth:'700px',
  minHeight: '210px'
  },
  links:{
    fontSize: "2em",
    paddingTop:"7px",
    paddingRight:"10px",
  },
  button: {
    marginTop: theme.spacing(1),
    size:"large",
  },
}));


export default function ContactUs() {
  const classes = useStyles();
  const [name, setName] =  useState("");
  const [email, setEmail] =  useState("");
  const [message, setMessage] =  useState("");


  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert('Your message has been submitted!');

      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };


  return (
    <div className={classes.root} >
      <Grid container spacing={1}>
        <Grid item xs={8}  >
        <Paper onSubmit={handleSubmit} elevation={3} className={classes.paper}>
          <form className={classes.form_left} onSubmit={handleSubmit}>
            <h1>Contact Us </h1>
            <div className={classes.inputs}>
              <input
                type={name}
                className={classes.input}
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
              />
              <input
                type= {email}
                className={classes.input}
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
              />
            </div>
            <textarea
              className={classes.textarea}
              placeholder="Message"
              name="Message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              
            />
            <div>
            
              <Button
                className={classes.button}
                type="submit"
                variant="contained"
                color="primary"
                style={{ color: loader ?  "secondary" : "primary" }} 
                disabled={ name === "" || email === "" || message === "" ? true : false }
              >
              Send message <SendIcon/>
            </Button>
            </div>
          </form>
          </Paper>
            </Grid>
              <Grid className={classes.grid_right} item xs={4}>
                <Paper className={classes.paper}>
                  <Box style={{ paddingBottom: '50px', display:'flex', flexDirection: 'column', alignItems: 'center'}}>COMPANY INFO
                    <CallOutlinedIcon style={{color: "#48A14F"}} /> <Box>   +374-77-77-77-77</Box>
                    <EmailOutlinedIcon style={{color: "#48A14F"}} /> <Box>   rest_am@yahoo.com </Box>
                    <ContactMailOutlinedIcon style={{color: "#48A14F"}} /> <Box>  Baghramyan Avenue </Box>
                  </Box>
                  <Box style={{ paddingBottom: '50px', display:'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <Box >Social Networks</Box>
                  <Box >
                    <Link href="https://www.facebook.com/sherep.resto"><FacebookIcon className={classes.links} /></Link>
                    <Link href="https://www.instagram.com/pesto_cafe_osteria/">< InstagramIcon className={classes.links} /></Link>
                    <Link href="https://www.linkedin.com/company/armenian-code-academy/"><LinkedInIcon className={classes.links} /></Link>
                    <Link href="https://twitter.com/GUDCapital"><TwitterIcon className={classes.links} /></Link>
                  </Box>
                  </Box>
                    <Box style={{ paddingBottom: '50px',  display:'flex', flexDirection: 'column', alignItems: 'center'}}>Business Hours
                    <Box>MO-FR</Box>
                    <Box>10:00-18:00</Box>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
      
      </div>
   
 
 
  )
}
