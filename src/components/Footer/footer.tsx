// #1F4E79

import React from "react";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import GooglePlayIcon from "@mui/icons-material/Android"; // Example icon for Google Play
import AppStoreIcon from "@mui/icons-material/Apple"; // Example icon for App Store
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer: React.FC = () => {
    return (
        <Box sx={{ backgroundColor: "#1F4E79", color: "white", padding: "2rem" }}>
            <Grid container spacing={3}>
                {/* First Column */}
                <Grid item xs={12} sm={3}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        {/* Google Play */}
                        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <IconButton sx={{ color: "white" }}>
                                <GooglePlayIcon />
                            </IconButton>
                            <Typography>Google Play Store</Typography>
                        </Box>
                        {/* App Store */}
                        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <IconButton sx={{ color: "white" }}>
                                <AppStoreIcon />
                            </IconButton>
                            <Typography>Apple App Store</Typography>
                        </Box>
                    </Box>
                </Grid>

                {/* Second Column */}
                <Grid item xs={12} sm={3}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <FacebookIcon />
                            <Typography>Facebook</Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <TwitterIcon />
                            <Typography>Twitter</Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <LinkedInIcon />
                            <Typography>LinkedIn</Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <YouTubeIcon />
                            <Typography>YouTube</Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <InstagramIcon />
                            <Typography>Instagram</Typography>
                        </Box>
                    </Box>
                </Grid>

                {/* Third Column */}
                <Grid item xs={12} sm={3}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <FacebookIcon />
                            <Typography>Community</Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <TwitterIcon />
                            <Typography>Blog</Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <LinkedInIcon />
                            <Typography>Careers</Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <YouTubeIcon />
                            <Typography>Newsroom</Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <InstagramIcon />
                            <Typography>Help Center</Typography>
                        </Box>
                    </Box>
                </Grid>

                {/* Fourth Column */}
                <Grid item xs={12} sm={3}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <LocationOnIcon />
                            <Typography>123, Address Lane, City</Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <EmailIcon />
                            <Typography>example@email.com</Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <PhoneIcon />
                            <Typography>+91 12345 67890</Typography>
                        </Box>
                        <Box>
                            <iframe
                                title="Google Maps"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345099146!2d144.96305731589514!3d-37.816218442041826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1f1a2e7%3A0x5045675218ce6e0!2s123%20Example%20Lane!5e0!3m2!1sen!2sin!4v1638239196186!5m2!1sen!2sin"
                                width="100%"
                                height="100"
                                style={{ border: 0 }}
                                loading="lazy"
                            ></iframe>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
