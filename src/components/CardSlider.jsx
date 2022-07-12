import React, { useState } from "react";
import {
  Box,
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
        <Stack direction="row" justifyContent="space-evenly">
          <Typography>{reach}k viewers</Typography>
          <Typography variant="h2" align="right">
            ${price * 12 * 0.75}.00
          </Typography>
          <Typography>/ Yearly</Typography>
        </Stack>
      );
    } else {
      return (
        <Stack direction="row" justifyContent="space-evenly">
          <Typography>{reach}k viewers</Typography>
          <Typography variant="h2" align="right">
            ${price}.00
          </Typography>
          <Typography>/ Monthly</Typography>
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
        <Stack direction="row" spacing={2} justifyContent="center">
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
          <Typography> 25% discount</Typography>
        </Stack>
      </Box>
    </div>
  );
}

export default CardSlider;
