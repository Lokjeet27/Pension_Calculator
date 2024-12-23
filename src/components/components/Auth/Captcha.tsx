import React, { useState } from "react";
import { Box, TextField, IconButton, Typography } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

const Captcha: React.FC<{ onCaptchaChange: (captcha: string) => void }> = ({ onCaptchaChange }) => {
    const [captcha, setCaptcha] = useState<string>(generateCaptcha());
    const [userInput, setUserInput] = useState<string>("");

    // Generate a new random captcha
    function generateCaptcha() {
        return Math.random().toString(36).substring(2, 8).toUpperCase();
    }

    const handleRefresh = () => {
        const newCaptcha = generateCaptcha();
        setCaptcha(newCaptcha);
        setUserInput(""); // Clear user input on refresh
        onCaptchaChange(""); // Notify parent about the reset
    };

    const handleInputChange = (value: string) => {
        setUserInput(value);
        onCaptchaChange(value); // Notify parent about input changes
    };

    return (
        <Box sx={{ mt: 2, textAlign: "center" }}>
            <Typography variant="h6">Captcha</Typography>
            <Typography
                variant="subtitle1"
                sx={{
                    display: "inline-block",
                    padding: "0.5rem",
                    backgroundColor: "#f0f0f0",
                    borderRadius: "5px",
                    letterSpacing: "3px",
                    fontWeight: "bold",
                }}
            >
                {captcha}
            </Typography>
            <IconButton onClick={handleRefresh} sx={{ ml: 1 }}>
                <RefreshIcon />
            </IconButton>
            <TextField
                placeholder="Enter Captcha"
                variant="outlined"
                fullWidth
                margin="normal"
                value={userInput}
                onChange={(e) => handleInputChange(e.target.value)}
            />
        </Box>
    );
};

export default Captcha;

// import React, { useState } from "react";
// import { Box, TextField, IconButton, Typography, Button } from "@mui/material";
// import RefreshIcon from "@mui/icons-material/Refresh";

// const Captcha: React.FC<{ onValidate: (isValid: boolean) => void }> = ({ onValidate }) => {
//     const [captcha, setCaptcha] = useState<string>(generateCaptcha());
//     const [userInput, setUserInput] = useState<string>("");

//     // Generate a new random captcha
//     function generateCaptcha() {
//         return Math.random().toString(36).substring(2, 8).toUpperCase();
//     }

//     const handleRefresh = () => {
//         setCaptcha(generateCaptcha());
//         setUserInput(""); // Clear user input on refresh
//     };

//     const handleValidate = () => {
//         const isValid = userInput === captcha;
//         onValidate(isValid); // Notify parent component
//     };

//     return (
//         <Box sx={{ mt: 2, textAlign: "center" }}>
//             {/* <Typography variant="h6">Captcha</Typography> */}
//             <Typography
//                 variant="subtitle1"
//                 sx={{
//                     display: "inline-block",
//                     padding: "0.5rem",
//                     backgroundColor: "#f0f0f0",
//                     borderRadius: "5px",
//                     letterSpacing: "3px",
//                     fontWeight: "bold",
//                 }}
//             >
//                 {captcha}
//             </Typography>
//             <IconButton onClick={handleRefresh} sx={{ ml: 1 }}>
//                 <RefreshIcon />
//             </IconButton>
//             <TextField
//                 placeholder="Enter Captcha"
//                 variant="outlined"
//                 fullWidth
//                 margin="normal"
//                 value={userInput}
//                 onChange={(e) => setUserInput(e.target.value)}
//             />
//             <Button
//                 variant="contained"
//                 color="secondary"
//                 onClick={handleValidate}
//                 sx={{ mt: 1 }}
//             >
//                 Validate
//             </Button>
//         </Box>
//     );
// };

// export default Captcha;
