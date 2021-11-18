import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import NetworkConnected from "../../NetworkConnected";
import { ChainId } from "../../../enums";
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Paper from '@mui/material/Paper';
import { useDispatch } from "react-redux";
import { actionCreators } from "../../../state";
import { useSelector } from "react-redux";
import { NetworkConnectionModal } from '../../NetworkConnectionModal';
import { WalletHelper } from '../../../helpers';
 
export const NavBar = (): JSX.Element => {
  const { mode } = useSelector((state: any) => state.theme);
  
  const networkState = useSelector((state: any) => state.network);
  
  const [connected, setConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [networkId, setNetworkId] = useState();
  const [open, setOpen] = useState(false);
  
  useEffect(() => { 
    setConnected(networkState.wallet !== null);
    setIsConnecting(networkState.connecting);
    setErrorMessage(networkState.error);
    setNetworkId(networkState.networkId);
  }, [networkState]);

  const dispatch = useDispatch();
  
  const changeMode = () => dispatch(actionCreators.changeThemeMode());

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>

      { connected && networkId && <NetworkConnected chainId={networkId}/> }

      { connected &&
        <Paper sx={{
          bgcolor: 'divider',
          display: "flex",
          alignItems: "center",
          padding: "3px 3px 3px 0px",
          borderRadius: 1
        }} elevation={0}>      
          
          <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
            { networkState.amount } {/* { NATIVE[networkId].symbol } */}
          </div>
          <Button sx={{ 
            height: "30px",
            fontWeight: 400,
            fontSize: "1rem",
            lineHeight: 1.5,
            letterSpacing: "0.00938em"
            }} variant="text" onClick={handleClickOpen}>
            <p>{ WalletHelper.shortAddress(networkState.wallet) }</p>
            <img src="/images/wallets/metamask.png" style={{ height: "18px", marginLeft: "10px" }}/>
          </Button>
          
        </Paper>
      }      
      { !connected &&
        <Button sx={{ 
          height: "36px",
          fontWeight: 400,
          fontSize: "1rem",
          lineHeight: 1.5,
          letterSpacing: "0.00938em"
            }}
          variant="contained" disableElevation onClick={handleClickOpen}>
          <p>Connect a wallet</p>
        </Button>
      }
      <NetworkConnectionModal open={open} handleClose={handleClose} wallet={networkState.wallet} isConnecting={isConnecting} errorMessage={errorMessage}></NetworkConnectionModal>        

      <IconButton sx={{ ml: 1 }} color="default" onClick={() => { changeMode() }}>
        { mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon /> }
      </IconButton>

    </div>
  );
};
