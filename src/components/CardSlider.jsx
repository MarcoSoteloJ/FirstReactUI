import React, { useState } from "react";
import {
  Box,
  Fab,
  FormControlLabel,
  Slider,
  Stack,
  Switch,
  Typography,
} from "@mui/material";

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

  function anual() {
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
    <div>
      <Box>{anual()}</Box>

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
          // valueLabelDisplay="auto"
          step={5}
          onChange={pricing}
          marks
          min={5}
          max={50}
        />
      </Box>

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
              <Switch
                color="primary"
                checked={checked}
                onChange={handleChange}
              />
            }
          />

          <Typography>Yearly Billing</Typography>
          <Fab variant="extended" size="small">
            25% discount
          </Fab>
        </Stack>
      </Box>
    </div>
  );
}

export default CardSlider;
