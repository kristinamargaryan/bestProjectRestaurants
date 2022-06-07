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
export default function Footer() {
    return (
    <footer style={{display:'flex', alignItems: 'flex-end', width: '100%'}}>
        <Box style={{ backgroundColor:"black",color:"#48A14F", paddingTop: '30px', paddingBottom: '30px', width: '100%'}} >
            <Container maxWidth="xl" style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Box>
                        <Link to="/">
                            <img
                                className="imgg"
                                style={{
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
                           <FacebookIcon  />
                           <InstagramIcon />
                           <LinkedInIcon />
                           <TwitterIcon />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <Box style={{ paddingBottom: '15px'}}>CUSTOM MENU</Box>
                        <Box>
                            <Link href = "/" color = "inherit"> Home </Link>
                        </Box>
                         <Box>
                            <Link href = "/" color = "inherit"> About  </Link>
                        </Box>
                        <Box>
                            <Link href = "/" color = "inherit"> Contact Us</Link>
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