import React, { useState } from "react";
import { TextField, Button, Typography, Paper, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate();

    const handleSignUp = () => {
        // API call for registration
        navigate('/homepage');
    };

    return (
        <Box
        sx={{ mt: 3, p: 4, borderRadius: 3}}
        >
            <Paper
            elevation={3}
            sx={{ mt: 3, p: 4, borderRadius: 3, display: 'flex', flexDirection: 'column', width: '50%', margin: 'auto' }}
        >
            <Typography variant="h4" gutterBottom align="center">
                Register
            </Typography>
            <TextField
                label="First Name"
                variant="outlined"
                // fullWidth
                margin="normal"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
                label="Last Name"
                variant="outlined"
                // fullWidth
                margin="normal"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
                label="Email"
                variant="outlined"
                // fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                label="Password"
                type="password"
                variant="outlined"
                // fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button
                variant="contained"
                color="primary"
                // fullWidth
                sx={{ mt: 3 }}
                onClick={handleSignUp}
            >
                Sign Up
            </Button>
        </Paper>

        </Box>
        
    );
};

export default Register;
