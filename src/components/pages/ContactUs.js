import React, { useState } from "react";
import Box from "@mui/material/Box"; 
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@mui/material/Link";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { db } from "../../firebase";
import Button from "@material-ui/core/Button";
import SendIcon from "@mui/icons-material/Send";
import DescriptionAlerts from "../DescriptionAlerts"; 

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: '100%',
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  form_left: {
    width: '800px',
    display:  'flex',
    flexDirection: 'column',
  },
  all:{
    paddingRight:"20px",
    display:'flex',
    flexDirection: 'column',
  },

  inputs: {
    display: "flex",
    justifyContent: "flex-start",
    paddingBottom:"5px",
    '@media (max-width: 1300px)': {
      flexDirection: 'column'
    }
  },
  inputOne:{
    fontSize:'20px', 
    width:'400px',
    '@media (max-width: 1300px)': {
      width:'620px',
    },
   
     '@media (max-width: 1050px)': {
      width:'60%',
    },
    '@media (max-width: 800px)': {
      maxWidth:'50%',
    },
  },
 inputTwo:{
    fontSize:'20px', 
    width:'400px',
    marginLeft:'5px',
    '@media (max-width: 1300px)':{
      marginLeft:'0px',
      marginTop:'3px',
      width:'620px',
    },
    
    '@media (max-width: 1050px)': {
      marginLeft:'0px',
      marginTop:'3px',
      width:'60%',
    },
    '@media (max-width: 800px)': {
      maxWidth:'50%',
    },
  },
  
  textarea:{
    fontSize:'24px', 
    height:'400px',
    width:'100%',
    resize:'none',
    '@media (max-width: 1300px)': {
      maxWidth:'80%',
    },
    '@media (max-width: 1050px)': {
      maxWidth:'60%',
    },
    '@media (max-width: 800px)': {
      maxWidth:'50%',
    },
    
  },
  links: {
    fontSize: "2em",
    paddingTop: "7px",
    paddingRight: "10px",
  },
  button: {
    marginTop: theme.spacing(1),
    size: "large",
  },
  container: {
    width: '100vh',
    display: 'flex', 
    justifyContent: 'space-between',
    
  },
  grid: {
    '@media (max-width: 768px)': {
      display: 'none', 
    }
  },
  firstbox:{
    display:"grid",
    '@media (max-width: 768px)': {
      display: 'flex', 
    }
  },
  boxOne:{
    gridColumn:"span 8",
    '@media (max-width: 768px)': {
      minWidth:"300px",
      paddingLeft: '24px',
    }
  },
  informationsBox :{
    paddingBottom: '50px',  
    display:'flex', 
    flexDirection: 'column', 
    alignItems: 'center'
  },
  
}));


export default function ContactUs() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("contacts")

      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(true);
        // alert('Your message has been submitted!');

        setTimeout(() => {
          setLoader(false);
        }, 3000);
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
  <Box className={classes.paper}>
      <Box   gridTemplateColumns="repeat(12, 1fr)"  gap={2} className={classes.firstbox}>
        <Box  className={classes.boxOne}>
          <Paper  elevation={3} className={classes.paper}>
            <form className={classes.form_left} onSubmit={handleSubmit}>
              <h1>Contact Us </h1>
              {loader && <DescriptionAlerts/>}
              <div className={classes.all}>
                <div className={classes.inputs}>
                  <input
                    type={name}
                    className={classes.inputOne}
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                  />
                  <input
                    type= {email}
                    className={classes.inputTwo}
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
              </div>
              <div>
                <Button
                  className={classes.button}
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{ color: loader ?  "secondary" : "primary" }} 
                  disabled={ name === "" || email === "" || message === "" ? true : false }>
                  Send message <SendIcon/>
                </Button>
              </div>
            </form>
            </Paper>
              </Box>
              <Box gridColumn="span 4" className={classes.grid}>
                <Paper className={classes.paper} >
                  <Box className={classes.informationsBox}>COMPANY INFO
                    <CallOutlinedIcon style={{color: "#48A14F"}} /> <Box>   +374-77-77-77-77</Box>
                    <EmailOutlinedIcon style={{color: "#48A14F"}} /> <Box>   rest_am@yahoo.com </Box>
                    <ContactMailOutlinedIcon style={{color: "#48A14F"}} /> <Box>  Baghramyan Avenue </Box>
                  </Box>
                  <Box className={classes.informationsBox}>
                  <Box >Social Networks</Box>
                  <Box >
                    <Link href="https://www.facebook.com/sherep.resto"><FacebookIcon className={classes.links} /></Link>
                    <Link href="https://www.instagram.com/pesto_cafe_osteria/">< InstagramIcon className={classes.links} /></Link>
                    <Link href="https://www.linkedin.com/company/armenian-code-academy/"><LinkedInIcon className={classes.links} /></Link>
                    <Link href="https://twitter.com/GUDCapital"><TwitterIcon className={classes.links} /></Link>
                  </Box>
                  </Box>
                    <Box className={classes.informationsBox}>Business Hours
                    <Box>MO-FR</Box>
                    <Box>10:00-18:00</Box>
                  </Box>
                </Paper>
              </Box>
            </Box> 
          </Box>
  )
}
