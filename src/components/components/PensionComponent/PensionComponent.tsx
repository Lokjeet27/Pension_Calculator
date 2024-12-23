import React, { useState } from "react";
import { Box, TextField, Typography, Button, Paper } from "@mui/material";

const PensionCalculator: React.FC = () => {
    const [principal, setPrincipal] = useState<number | string>("");
    const [rate, setRate] = useState<number | string>("");
    const [time, setTime] = useState<number | string>("");
    const [calculatedAmount, setCalculatedAmount] = useState<number | null>(null);
    const [errors, setErrors] = useState({
        principal: "",
        rate: "",
        time: "",
    });

    const validateInput = (field: string, value: string | number) => {
        const errorText = Number(value) < 0 ? "Value must be non-negative" : "";
        setErrors((prevErrors) => ({
            ...prevErrors,
            [field]: errorText,
        }));
    };

    const handleCalculate = () => {
        const rateDecimal = Number(rate) / 100; // Convert percentage to decimal
        const amount = Number(principal) * Math.pow(1 + rateDecimal, Number(time));
        setCalculatedAmount(parseFloat(amount.toFixed(2))); // Round to 2 decimals
    };

    const isCalculateDisabled =
        !principal || !rate || !time || errors.principal || errors.rate || errors.time;

    return (
        <Paper
            elevation={3}
            sx={{
                width: "25rem",
                margin: "2rem auto",
                padding: "2rem",
                borderRadius: 3,
                backgroundColor: "#f0f4f3", // Light grey-green background
            }}
        >
            <Typography
                variant="h4"
                gutterBottom
                align="center"
                sx={{ color: "#2d6a4f", fontWeight: "bold" }}
            >
                Pension Calculator
            </Typography>
            <Box
                component="form"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    label="Principal Amount (₹)"
                    type="number"
                    variant="outlined"
                    fullWidth
                    value={principal}
                    onChange={(e) => {
                        const value = e.target.value;
                        setPrincipal(value);
                        validateInput("principal", value);
                    }}
                    error={!!errors.principal}
                    helperText={errors.principal}
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "#2d6a4f" },
                            "&:hover fieldset": { borderColor: "#40916c" },
                            "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                                { WebkitAppearance: "none", margin: 0 }, // Remove spinner
                        },
                    }}
                />
                <TextField
                    label="Interest Rate (%)"
                    type="number"
                    variant="outlined"
                    fullWidth
                    value={rate}
                    onChange={(e) => {
                        const value = e.target.value;
                        setRate(value);
                        validateInput("rate", value);
                    }}
                    error={!!errors.rate}
                    helperText={errors.rate}
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "#2d6a4f" },
                            "&:hover fieldset": { borderColor: "#40916c" },
                            "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                                { WebkitAppearance: "none", margin: 0 }, // Remove spinner
                        },
                    }}
                />
                <TextField
                    label="Time (Years)"
                    type="number"
                    variant="outlined"
                    fullWidth
                    value={time}
                    onChange={(e) => {
                        const value = e.target.value;
                        setTime(value);
                        validateInput("time", value);
                    }}
                    error={!!errors.time}
                    helperText={errors.time}
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "#2d6a4f" },
                            "&:hover fieldset": { borderColor: "#40916c" },
                            "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                                { WebkitAppearance: "none", margin: 0 }, // Remove spinner
                        },
                    }}
                />
                <Button
                    variant="contained"
                    fullWidth
                    onClick={handleCalculate}
                    disabled={!!isCalculateDisabled}
                    sx={{
                        backgroundColor: isCalculateDisabled ? "#9e9e9e" : "#2d6a4f",
                        "&:hover": {
                            backgroundColor: isCalculateDisabled ? "#9e9e9e" : "#40916c",
                        },
                    }}
                >
                    Calculate
                </Button>
            </Box>
            {calculatedAmount !== null && (
                <Typography
                    variant="h6"
                    align="center"
                    sx={{ marginTop: "1.5rem", color: "#2d6a4f" }}
                >
                    Final Amount: ₹{calculatedAmount}
                </Typography>
            )}
        </Paper>
    );
};

export default PensionCalculator;