import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import React from "react";
import { NETWORK_ICON, NETWORK_LABEL } from "../../config/networks";
import Paper from '@mui/material/Paper';
import { ChainId } from '../../enums';

interface Web3NetworkProps{
  chainId: number
}
function NetworkConnected({ chainId }: Web3NetworkProps): JSX.Element | null {
  
  if (!chainId) return null;

  return (
    <Paper sx={{
      bgcolor: 'divider',
      display: "flex",
      alignItems: "center",
      marginRight: 1.5,
      borderRadius: 1,
      padding: "3px 5px"
    }} elevation={0}>
      <div style={{ display: "flex", alignItems: "center", height: '30px' }}>
        <img
          src={NETWORK_ICON[chainId]}
          alt="Switch Network"
          style={{ marginRight: 5, borderRadius: 4 }}
          width="22px"
          height="22px"
        />
        <div>{NETWORK_LABEL[chainId]}</div>
      </div>
    </Paper>
  );
}

export default NetworkConnected;
