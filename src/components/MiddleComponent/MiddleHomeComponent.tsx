{/* <a href="https://smp.smportkolkata.in/smpk/kol/kolkata-homepage/" class="capsule-button" role="link">VISIT SITE</a> */}
{/* <a href="https://smp.smportkolkata.in/smpk/hld/haldia-dock-home/" class="capsule-button" role="link">VISIT SITE</a> */}
{/* <a href="#" class="capsule-button" id="watch-video" onclick="openPopup('https://www.youtube.com/embed/ZG7Sdb3olNw?si=i0tOgZBGtrsud61W')" role="link">WATCH VIDEO</a> */}

{/* <div class="slide-inner slide-bg-image img-responsive" data-background="https://smp.smportkolkata.in/smpk/wp-content/uploads/2024/08/kolkata_banner_home_new-1-1.jpg" style="transform: translate3d(620px, 0px, 0px); transition: all; background-image: url(&quot;https://smp.smportkolkata.in/smpk/wp-content/uploads/2024/08/kolkata_banner_home_new-1-1.jpg&quot;);"> <div class="container" style="display:block"> <div data-swiper-parallax="300" class="slide-title" style="transition-duration: 0ms; transform: translate3d(300px, 0px, 0px);"> <a href="https://smp.smportkolkata.in/smpk/kol/kolkata-homepage/" class="capsule-button" role="link">VISIT SITE</a> </div> <div class="clearfix"></div> </div> </div> */}

// <div class="slide-inner slide-bg-image img-responsive" data-background="https://smp.smportkolkata.in/smpk/wp-content/uploads/2024/08/kolkata_banner_home_new-1-1.jpg" style="transform: translate3d(-620px, 0px, 0px); transition: all; background-image: url(&quot;https://smp.smportkolkata.in/smpk/wp-content/uploads/2024/08/kolkata_banner_home_new-1-1.jpg&quot;);"> <div class="container" style="display:block"> <div data-swiper-parallax="300" class="slide-title" style="transition-duration: 0ms; transform: translate3d(-300px, 0px, 0px);"> <a href="https://smp.smportkolkata.in/smpk/kol/kolkata-homepage/" class="capsule-button" role="link">VISIT SITE</a> </div> <div class="clearfix"></div> </div> </div>

import React from "react";
import { Box, Button, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Sample carousel data
const carouselData = [
    {
        image: "https://smp.smportkolkata.in/smpk/wp-content/https://smp.smportkolkata.in/smpk/wp-content/uploads/2024/08/kolkata_banner_home_new-1-1.jpg/2024/08/kolkata_banner_home_new-1-1.jpg",
        link: "https://smp.smportkolkata.in/smpk/kol/kolkata-homepage/",
        title: "KOLKATA DOCK SYSTEM",
    },
    {
        image: "https://via.placeholder.com/1200x600?text=Slide+2",
        link: "https://smp.smportkolkata.in/smpk/hld/haldia-dock-home/",
        title: "HALDIA DOCK HOME",
    },
    {
        image: "https://via.placeholder.com/1200x600?text=Slide+3",
        link: "#",
        title: "WELCOME TO SMPK PORT",
    },
];

// Custom arrow components
const CustomPrevArrow = ({ onClick }: any) => (
    <Box
        onClick={onClick}
        sx={{
            position: "absolute",
            left: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            cursor: "pointer",
        }}
    >
        <ArrowBackIosNewIcon sx={{ fontSize: "3rem", color: "white" }} />
    </Box>
);

const CustomNextArrow = ({ onClick }: any) => (
    <Box
        onClick={onClick}
        sx={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            cursor: "pointer",
        }}
    >
        <ArrowForwardIosIcon sx={{ fontSize: "3rem", color: "white" }} />
    </Box>
);

const CarouselComponent: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    return (
        <Box sx={{ width: "100%", maxWidth: "1200px", margin: "0 auto", overflow: "hidden" }}>
            <Slider {...settings}>
                {carouselData.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            height: "400px",
                            backgroundImage: `url(${item.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative",
                        }}
                    >
                        {/* Overlay for better text contrast */}
                        <Box
                            sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: "rgba(0, 0, 0, 0.4)",
                            }}
                        ></Box>

                        {/* Content */}
                        <Box
                            sx={{
                                position: "relative",
                                zIndex: 1,
                                textAlign: "center",
                                color: "white",
                            }}
                        >
                            <Typography
                                variant="h4"
                                sx={{
                                    mb: 2,
                                    fontWeight: "bold",
                                    textShadow: "0 2px 4px rgba(0,0,0,0.8)",
                                }}
                            >
                                {item.title}
                            </Typography>
                            <Button
                                variant="contained"
                                color="secondary"
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    backgroundColor: "#1F4E79",
                                    "&:hover": {
                                        backgroundColor: "#0f2e50",
                                    },
                                    px: 4,
                                    py: 1.5,
                                }}
                            >
                                VISIT SITE
                            </Button>
                        </Box>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default CarouselComponent;
