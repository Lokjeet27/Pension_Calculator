// src/components/Dashboard/Dashboard.tsx
import React from "react";
import { Box } from "@mui/material";
import Login from "../Auth/Login";
import Header from "../util components/Header";

const LoginPage: React.FC = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Header />
            <Login />
        </Box>
    );
};

export default LoginPage;
