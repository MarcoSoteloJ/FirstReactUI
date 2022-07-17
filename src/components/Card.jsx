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
        position: "absolute",
        marginLeft: "30%",
        marginRight: "30%",
        left: 0,
        right: 0,
        top: "40%",
        textAlign: "center",
        zIndex: "tooltip",
      }}
    >
      {/* Card Body */}
      <Card>
        <CardContent>
          <Box padding="60px 0">
            <CardSlider />
          </Box>
        </CardContent>

        <Divider />

        <CardContent>
          {/* Card Footer */}

          <Box
            sx={{
              padding: "40px",
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-evenly"
              spacing={20}
            >
              <Stack spacing={2} alignItems="flex-start">
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

              <Fab variant="extended" size="string" color="primary">
                <Typography variant="body1">Start my trial</Typography>
              </Fab>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Panel;
