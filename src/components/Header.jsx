import React from "react";
import { Box, Typography } from "@mui/material";
import background from "./images/bg-pattern.svg";

function Header() {
  return (
    <Box
      sx={{
        padding: "200px",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        height: "20vh",
      }}
    >
      <Typography variant="h4" align="center" fontWeight="bold">
        Simple, traffic-based princing
      </Typography>

      <Typography variant="h6" color="gray" align="center">
        Sign-up for our 30-day trial. No credit card required
      </Typography>
    </Box>
  );
}

export default Header;
