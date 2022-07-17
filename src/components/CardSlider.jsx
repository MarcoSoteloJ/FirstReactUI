import React, { useState } from "react";
import {
  Box,
  Container,
  FormControlLabel,
  Fab,
  Slider,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";

// UseStates

function CardSlider() {
  const [reach, setReach] = useState("100");
  const [price, setPrice] = useState("16");
  const [checked, setCheck] = useState(false);

  function pricing(event) {
    setReach(event.target.value * 10);
    setPrice(event.target.value * 1.6);
  }

  function handleChange(event) {
    setCheck(event.target.checked);
  }

  // Switch Styling

  const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor: theme.palette.mode === "dark" ? "null" : "primary",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "primary",
        border: "100px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 1000,
      }),
    },
  }));

  function anual() {
    // Card Price

    if (checked === true) {
      return (
        <Stack
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Typography variant="h5">{reach}k viewers</Typography>

          <Stack direction="row" alignItems="center">
            <Typography variant="h3" fontWeight="bold">
              ${price * 12 * 0.75}.00
            </Typography>
            <Typography variant="h5"> / Yearly</Typography>
          </Stack>
        </Stack>
      );
    } else {
      return (
        <Stack
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Typography variant="h5">{reach}k viewers</Typography>

          <Stack direction="row" alignItems="center">
            <Typography variant="h3" fontWeight="bold">
              ${price}.00
            </Typography>
            <Typography variant="h5"> / Monthly</Typography>
          </Stack>
        </Stack>
      );
    }
  }

  return (
    <Box>
      <Box>{anual()}</Box>
      {/* Card Slider  */}
      <Box
        sx={{
          display: "flex ",
          justifyContent: "center",
          height: "100px",
          padding: "20px 10px",
        }}
      >
        <Slider
          aria-label="Price"
          defaultValue={10}
          step={5}
          onChange={pricing}
          min={5}
          max={50}
        />
      </Box>

      {/* CardSwitch */}

      <Box>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Typography>Monthly Billing</Typography>

          <FormControlLabel
            control={
              <IOSSwitch
                color="primary"
                checked={checked}
                onChange={handleChange}
              />
            }
          />

          <Typography>Yearly Billing</Typography>
          <Fab variant="extended" size="small" color="secondary">
            <Typography variant="subtitle2">25% discount</Typography>
          </Fab>
        </Stack>
      </Box>
    </Box>
  );
}

export default CardSlider;
