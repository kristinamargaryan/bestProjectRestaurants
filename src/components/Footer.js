import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from  "@mui/icons-material/LinkedIn";
import TwitterIcon from  "@mui/icons-material/Twitter";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import { useNavigate } from "react-router-dom";
import{ HOMEPAGE_ROUTE,
    ABOUT_ROUTE,
    CONTACTUS_ROUTE,
     FORBUSINES_ROUTE,
    FORBUSINESMYREST_ROUTE,
    UPDATEPROFILE_ROUTE,
    SIGNIN_ROUTE,
    SIGNUP_ROUTE,
    FORGOTPASSWORD_ROUTE } from '../constants/constants';


export default function Footer() {
    const navigate = useNavigate();
    const goHome = () => navigate(HOMEPAGE_ROUTE);
    const goAbout = () => navigate(ABOUT_ROUTE);
    const goContactUs = () => navigate(CONTACTUS_ROUTE);
    return (
    <footer style={{display:'flex', alignSelf: 'flex-end', alignItems: 'flex-end', width: '100%'}}>
        <Box style={{ backgroundColor:"black",color:"#48A14F", paddingTop: '30px', paddingBottom: '30px', width: '100%'}} >
            <Container maxWidth="xl" style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Box>
                        <Link onClick={goHome}>
                            <img
                                className="imgg"
                                style={{
                                cursor: 'pointer',
                                width: "80px",
                                height: "50px",
                                objectPosition: "center",
                                }}
                                src="https://clipart.world/wp-content/uploads/2020/08/restaurant-logo-with-red-chef-hat-png-transparent.png"
                                alt=""
                            />
                            </Link>
                        </Box>
                         <Box style={{ paddingBottom: '15px'}}>
                         Rest.am is an ultra-fast, relevant, accurate, and user friendly restaurants metasearch engine, delivering a unique cross-platform experience.
                        </Box>
                        <Box> 
                            <Link href="https://www.facebook.com/sherep.resto"><FacebookIcon  /></Link>
                            <Link href="https://www.instagram.com/pesto_cafe_osteria/">< InstagramIcon  /></Link>
                            <Link href="https://www.linkedin.com/company/armenian-code-academy/"><LinkedInIcon  /></Link>
                            <Link href="https://twitter.com/GUDCapital"><TwitterIcon  /></Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <Box style={{ paddingBottom: '15px'}}>CUSTOM MENU</Box>
                        <Box>
                            <Link onClick={goHome}  color = "inherit"> Home </Link>
                        </Box>
                         <Box>
                            <Link onClick={goAbout} color = "inherit"> About  </Link>
                        </Box>
                        <Box>
                            <Link onClick={goContactUs}  color = "inherit"> Contact Us</Link>
                        </Box>
                    </Grid>
                    <Grid style={{ color: 'white'}} item xs={12} sm={4}>
                        <Box style={{ paddingBottom: '15px'}}><div>COMPANY INFO</div></Box>
                        <Box style={{display: 'flex', alignItems: 'center'}}> <CallOutlinedIcon  /><div style={{marginLeft: '3px'}}>+374-77-77-77-77</div></Box>
                        <Box style={{display: 'flex', alignItems: 'center'}}> <EmailOutlinedIcon /><div style={{marginLeft: '3px'}}>rest_am@yahoo.com</div></Box>
                        <Box style={{display: 'flex', alignItems: 'center'}}> <ContactMailOutlinedIcon /><div style={{marginLeft: '3px'}}>Baghramyan Avenue</div></Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </footer>
    )
}