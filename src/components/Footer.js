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

export default function Footer() {
    const navigate = useNavigate();
    const goHome = () => navigate("/");
    const goAbout = () => navigate("/About");
    const goContactUs = () => navigate("/ContactUs");
    return (
    <footer style={{ marginTop: '40px'}}>
        <Box style={{ backgroundColor:"black",  color:"#48A14F",  paddingBottom: '15px'}}>
            <Container maxWidth="1g">
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
                        <Box style={{ paddingBottom: '15px'}}>COMPANY INFO</Box>
                        <Box> <CallOutlinedIcon />   +374-77-77-77-77</Box>
                        <Box> <EmailOutlinedIcon />  rest_am@yahoo.com </Box>
                        <Box> <ContactMailOutlinedIcon />  Baghramyan Avenue </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </footer>
    )
}