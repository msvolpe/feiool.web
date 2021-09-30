import React from "react";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Web3Network from "../../Web3Network";
import { ChainId } from "../../../enums";

const useStyles = makeStyles((theme) => ({
  navContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  networkButton: {
    padding: 0,
    minWidth: 0,
    marginRight: 10,
  },
}));

interface Wallet {
  account: any;
  chainId: ChainId;
  library: any;
}

const useActiveWeb3React = (): Wallet => {
  return {
    account: "",
    chainId: ChainId.MAINNET,
    library: "",
  };
};

export const NavBar = (): JSX.Element => {
  const classes = useStyles();
  const { account, chainId, library } = useActiveWeb3React();

  return (
    <div className={classes.navContent}>
      <Button
        className={classes.networkButton}
        variant="outlined"
        color="primary"
        onClick={() => {
          const params: any = {
            type: "ERC20",
            options: {
              address: "0x6B3595068778DD592e39A122f4f5a5cF09C90fE2", //SUSHI_ADDRESS[chainId],
              symbol: "SUSHI",
              decimals: 18,
              image:
                "https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x6B3595068778DD592e39A122f4f5a5cF09C90fE2/logo.png",
            },
          };
          console.log(params);
        }}
      >
        <img
          src="https://app.sushi.com/_next/image?url=%2Fimages%2Ftokens%2Fsushi-square.jpg&w=96&q=75"
          alt="SUSHI"
          width="35px"
          height="35px"
        />
        s
      </Button>

      <Web3Network />

      <div className="w-auto flex items-center rounded bg-dark-900 hover:bg-dark-800 p-0.5 whitespace-nowrap text-sm font-bold cursor-pointer select-none pointer-events-auto">
        {account && chainId && (
          <>
            <div className="px-3 py-2 text-primary text-bold">
              0.02561 OKT {NATIVE[chainId].symbol}
            </div>
          </>
        )}
        {account && <Web3Status />}
        {!account && <Web3Connect />}
      </div>
    </div>
  );
};
