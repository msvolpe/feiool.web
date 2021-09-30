import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { NETWORK_ICON, NETWORK_LABEL } from "../../config/networks";

const useStyles = makeStyles((theme) => ({
  networkButton: {
    padding: "5px",
  },
  networkImage: {
    marginRight: 5,
    borderRadius: 4,
  },
}));

function Web3Network(): JSX.Element | null {
  //const { chainId } = useActiveWeb3React()
  const chainId = 66;
  const classes = useStyles();
  //const toggleNetworkModal = useNetworkModalToggle()

  if (!chainId) return null;

  return (
    <div
      className="flex items-center rounded bg-dark-900 hover:bg-dark-800 whitespace-nowrap text-sm font-bold cursor-pointer select-none pointer-events-auto"
      //onClick={() => toggleNetworkModal()}
    >
      <Button
        className={classes.networkButton}
        variant="outlined"
        color="primary"
      >
        <img
          src={NETWORK_ICON[chainId]}
          alt="Switch Network"
          className={classes.networkImage}
          width="22px"
          height="22px"
        />
        <div className="text-primary">{NETWORK_LABEL[chainId]}</div>
      </Button>
      {/* <NetworkModel /> */}
    </div>
  );
}

export default Web3Network;
