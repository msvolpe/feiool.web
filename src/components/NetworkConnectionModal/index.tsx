import Button from "@mui/material/Button";
import React, { useEffect } from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useDispatch } from "react-redux";
import { actionCreators } from "../../state";
import Alert from '@mui/material/Alert';
import { WalletHelper } from '../../helpers'

interface NetworkConnectionProps {
  open: boolean;
  handleClose: Function;
  wallet: string;
  isConnecting: boolean;
  errorMessage: string;
}

export const NetworkConnectionModal = ({ open, handleClose, wallet, isConnecting, errorMessage }: NetworkConnectionProps) => {

  const [connected, setConnected] = React.useState(false);
  const dispatch = useDispatch();

  useEffect(() => { setConnected(wallet !== null) }, [wallet]);

  const connectToWallet = () => {
    dispatch(actionCreators.connectToNetwork());
  }

  const onClose = () => {
    handleClose();
  }

  return (
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          { connected ? "Wallet connected" : "Connect a wallet" }
        </DialogTitle>
        <DialogContent>
            {
              connected &&
              <div>
                <Paper sx={{
                  bgcolor: 'divider',
                  display: "flex",
                  alignItems: "center",
                  padding: "10px",
                  borderRadius: 1
                }} elevation={0}>
                  { WalletHelper.shortAddress(wallet) }
                </Paper>
                <Box sx={{ paddingTop: "10px", paddingBottom: "10px" }}>
                  <Link  href={`https://bscscan.com/address/${wallet}`} underline="none" target="_blank" rel="noreferrer" sx={{ fontSize: "14px" }}>View on explorer</Link>
                </Box>
              </div>
            }
            {
              isConnecting &&
              <Alert variant="outlined" severity="warning" sx={{ marginBottom: "10px" }}>
                Connecting to Metamask ...
              </Alert>
            }
            {
              !isConnecting && errorMessage !== "" &&
              <Alert variant="outlined" severity="error" sx={{ marginBottom: "10px" }}>
                
                { errorMessage } <strong>click and try again!</strong>
              </Alert>
            }
            <Button sx={{
              width: 400,
              height: "50px",
              fontWeight: 400,
              fontSize: "1rem",
              lineHeight: 1.5,
              letterSpacing: "0.00938em"
              }} variant="outlined" size="large" onClick={connectToWallet} disabled={connected}>
            <img src="/images/wallets/metamask.png" style={{ height: "24px", marginRight: "10px", marginLeft: "10px" }}/>
            <p>Metamask</p>            
          </Button>

        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} autoFocus>
            Close
          </Button>
        </DialogActions>
        
      </Dialog>
  );
};