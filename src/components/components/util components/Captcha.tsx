// src/components/Auth/Captcha.tsx
import React from "react";
import { Box, TextField, Typography } from "@mui/material";

const Captcha: React.FC = () => {
    return (
        <Box sx={{ mt: 2 }}>
            <Typography variant="body2" sx={{ mb: 1 }}>
                Please enter the text shown below:
            </Typography>
            <Box
                sx={{
                    bgcolor: "#e0e0e0",
                    py: 1,
                    px: 2,
                    textAlign: "center",
                    borderRadius: 1,
                }}
            >
                <Typography
                    variant="h6"
                    sx={{ letterSpacing: 5, fontWeight: "bold" }}
                >
                    A1B2C3
                </Typography>
            </Box>
            <TextField
                label="Enter CAPTCHA"
                variant="outlined"
                fullWidth
                margin="normal"
            />
        </Box>
    );
};

export default Captcha;
