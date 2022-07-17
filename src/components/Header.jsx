import React from "react";
import { Box, Typography } from "@mui/material";
import background from "./images/bg-pattern.svg";
import Circulos from "./images/pattern-circles.svg";

function Header() {
  return (
    // Circles image

    <div>
      <Box
        sx={{
          left: "45%",
          right: 0,
          top: "15%",
          position: "absolute",
          zIndex: "modal",
        }}
      >
        <img src={Circulos} alt="behind title"></img>
      </Box>

      {/* Background Image  */}

      <Box
        sx={{
          padding: "200px 0",
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          left: 0,
          top: 0,
          height: "15vh",
          width: "100%",
          position: "absolute",
          zIndex: "drawer",
        }}
      ></Box>

      {/* Page Header Text */}

      <Box
        sx={{
          left: 0,
          top: "20%",
          width: "100%",
          position: "absolute",
          zIndex: "snackbar",
        }}
      >
        <Typography variant="h4" align="center" fontWeight="bold">
          Simple, traffic-based princing
        </Typography>

        <Typography variant="h6" color="gray" align="center">
          Sign-up for our 30-day trial. No credit card required
        </Typography>
      </Box>
    </div>
  );
}

export default Header;
