import React from "react";
import {
  Box,
  Card,
  Divider,
  Fab,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import CardSlider from "./CardSlider";
import Palomita from "./images/icon-check.svg";

function Panel() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          width: "40%",
        }}
      >
        <CardContent>
          <Box padding="30px 0 0">
            <CardSlider />
          </Box>
        </CardContent>

        <Divider />

        <CardContent>
          <Box
            sx={{
              padding: "40px",
            }}
          >
            <Stack direction="row" justifyContent="space-evenly" spacing={30}>
              <Stack spacing={1}>
                <Typography>
                  <img src={Palomita} alt="palomita check" />
                  Unlimited Websites
                </Typography>
                <Typography>
                  <img src={Palomita} alt="palomita check" />
                  100% data ownership
                </Typography>
                <Typography>
                  <img src={Palomita} alt="palomita check" />
                  Email Reports
                </Typography>
              </Stack>

              <Fab variant="extended">Start my trial</Fab>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Panel;
