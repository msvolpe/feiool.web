import React from "react";
import AppBar from "@mui/material/AppBar/AppBar";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import Typography from "@mui/material/Typography/Typography";
import { NavBar } from "../NavBar";

export const ApplicationBar = () => {
  
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ border: `1px solid`, borderColor: "divider" }}
    >
      <Toolbar sx={{ flexWrap: "wrap", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
        >
          Feiool finance
        </Typography>
        <NavBar></NavBar>
      </Toolbar>
    </AppBar>
  );
};
