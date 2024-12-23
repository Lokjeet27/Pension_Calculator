// src/components/Header/Header.tsx
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Header: React.FC = () => {
    return ( 
        <AppBar position="static" sx={{ bgcolor: "teal" }}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Pension Management Dashboard
                </Typography>
                <Box>
                    <Button
                        variant="contained"
                        color="secondary"
                        sx={{
                            bgcolor: "#004d40",
                            "&:hover": { bgcolor: "#00695c" },
                        }}
                    >
                        Sign Up
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
