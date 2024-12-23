import React, { useState } from "react";
import { TextField, Button, Typography, Paper, Box } from "@mui/material";
import Captcha from "../util components/Captcha";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [captchaInput, setCaptchaInput] = useState<string>("");
    const [captcha, setCaptcha] = useState<string>("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if (captchaInput !== captcha) {
            alert("Captcha validation failed! Please try again.");
            return;
        }

        // Proceed with login API call
        navigate('/homepage');
    };

    const handleRegister = () => {
        navigate('/register');
    };

    return (
        <Paper
            elevation={3}
            sx={{ Width: "16rem", mt: 1, p: 4, borderRadius: 3 }}
        >
            <Typography variant="h4" gutterBottom align="center">
                Login
            </Typography>
            <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Captcha onCaptchaChange={setCaptchaInput} />
            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleLogin}
                    sx={{ width: "48%" }}
                >
                    Login
                </Button>
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={handleRegister}
                    sx={{ width: "48%" }}
                >
                    Register
                </Button>
            </Box>
        </Paper>
    );
};

export default Login;

// import React, { useState } from "react";
// import { TextField, Button, Typography, Paper } from "@mui/material";
// import Captcha from "./Captcha";
// import { useNavigate } from "react-router-dom";

// const Login: React.FC = () => {
//     const [email, setEmail] = useState<string>("");
//     const [password, setPassword] = useState<string>("");
//     const [isCaptchaValid, setIsCaptchaValid] = useState<boolean>(false);
//     const navigate = useNavigate();

//     const handleLogin = () => {
//         if (isCaptchaValid) {
//             navigate('/homepage');
//         } else {
//             alert("Captcha validation failed!");
//         }
//     };

//     const handleCaptchaValidation = (isValid: boolean) => {
//         setIsCaptchaValid(isValid);
//         if (!isValid) {
//             alert("Incorrect Captcha. Please try again.");
//         }
//     };

//     return (
//         <Paper
//             elevation={3}
//             sx={{ Width: "16rem", mt: 1, p: 4, borderRadius: 3 }}
//         >
//             <Typography variant="h4" gutterBottom align="center">
//                 Login
//             </Typography>
//             <TextField
//                 label="Email"
//                 variant="outlined"
//                 fullWidth
//                 margin="normal"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//             />
//             <TextField
//                 label="Password"
//                 type="password"
//                 variant="outlined"
//                 fullWidth
//                 margin="normal"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//             />
//             {/* Captcha Component */}
//             <Captcha onValidate={handleCaptchaValidation} />
//             <Button
//                 variant="contained"
//                 color="primary"
//                 fullWidth
//                 sx={{ mt: 3 }}
//                 onClick={handleLogin}
//             >
//                 Login
//             </Button>
//         </Paper>
//     );
// };

// export default Login;

// // src/components/Auth/Login.tsx
// import React, { useState } from "react";
// import { TextField, Button, Typography, Paper } from "@mui/material";
// import Captcha from "../util components/Captcha";
// import { Navigate, useNavigate } from "react-router-dom";
// // import Captcha from "./Captcha";

// const Login: React.FC = () => {
//     const [email, setEmail] = useState<string>("");
//     const [password, setPassword] = useState<string>("");
//     const navigate = useNavigate();

//     const handleLogin = () => {
//         // API call for login functionality
//         navigate('/homepage');
//     };

//     return (
//         <Paper
//             elevation={3}
//             sx={{ Width: "16rem", mt: 1, p: 4, borderRadius: 3 }}
//         >
//             <Typography variant="h4" gutterBottom align="center">
//                 Login
//             </Typography>
//             <TextField
//                 label="Email"
//                 variant="outlined"
//                 fullWidth
//                 margin="normal"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//             />
//             <TextField
//                 label="Password"
//                 type="password"
//                 variant="outlined"
//                 fullWidth
//                 margin="normal"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//             />
//             {/* Captcha Component */}
//             <Captcha />
//             <Button
//                 variant="contained"
//                 color="primary"
//                 fullWidth
//                 sx={{ mt: 3 }}
//                 onClick={handleLogin}
//             >
//                 Login
//             </Button>
//         </Paper>
//     );
// };

// export default Login;
