import React, { useEffect, useState, useMemo } from "react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ApplicationBar } from "./ApplicationBar";
import { useSelector } from "react-redux";
import NetworkProvider from "../NetworkProvider";
import NetworkProviderStatus from "../NetworkProviderStatus";

export const Layout = () => {
  
  const themeState = useSelector((state: any) => state.theme);
  const [mode, setMode] = useState<'light' | 'dark'>(themeState.mode);

  useEffect(() => {
    setMode(themeState.mode)
  }, [themeState])

  const theme = useMemo(() => {
      return createTheme({
        palette: {
          mode,
          primary: {
            light: '#ff9800',
            main: '#ED6C02',
            dark: '#e65100'
          },
        },
      })},
    [mode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NetworkProvider>
        <ApplicationBar></ApplicationBar> 
        <NetworkProviderStatus></NetworkProviderStatus>
      </NetworkProvider>
    </ThemeProvider>
  );
};
