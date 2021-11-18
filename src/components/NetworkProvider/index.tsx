import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { NETWORK_ICON, NETWORK_LABEL } from "../../config/networks";
import Paper from '@mui/material/Paper';
import Web3 from "web3";
import { actionCreators } from "../../state";
import { useDispatch, useSelector } from "react-redux";

interface NetworkProviderProps{
  children: any
}
interface ConnectInfo {
    chainId: string;
}

function NetworkProvider(props: NetworkProviderProps): JSX.Element | null {
    const dispatch = useDispatch();    
    const networkState = useSelector((state: any) => state.network);  
    const { wallet, connecting, error, amount, networkId, symbol } = networkState;

    const onConnected = (connectInfo: ConnectInfo) => {
        dispatch(actionCreators.setProviderStatus("CONNECTED"));
    }

    const onDisconnected = (connectInfo: ConnectInfo) => {
        dispatch(actionCreators.setProviderStatus("DISCONNECTED"));
    }

    const onChangeAccount = (accounts: string[]) => {
        dispatch(actionCreators.changeAccounts(accounts[0]));
    }

    const onChangeNetwork = (chainId: string) => {
        console.log("CHANGE_NETWORKS " + chainId);
        window.location.reload();
    }

    const sendRequest = async (methodName: string) => {
        let data = await window.ethereum.request({ method: methodName });
        console.log(data);
    }

    const logAccounts = async () => {
        var web3 = new Web3(window.ethereum);
        console.log(await web3.eth.getAccounts());
    }

    useEffect(() => {
        if(window.ethereum) {
            let eth = window.ethereum
            if(eth.isMetaMask){                
                
                eth.on('connect', onConnected);
                eth.on('disconnect', onDisconnected);
                eth.on('accountsChanged', onChangeAccount);
                eth.on('chainChanged', onChangeNetwork);                
                
                logAccounts();
                // sendRequest('eth_chainId');
                // sendRequest('eth_accounts');
                // sendRequest('net_version');
            }
        } else {
            console.log("INSTALL METAMASK");
        }
    }, [])

    useEffect(() => {
        return () => {
            console.log('Componente desmontado');
            if(window.ethereum) {
                console.log('removeListener');
                window.ethereum.removeListener('connect', onConnected);
                window.ethereum.removeListener('disconnect', onDisconnected);
                window.ethereum.removeListener('accountsChanged', onChangeAccount);
                window.ethereum.removeListener('chainChanged', onChangeNetwork);
            }
        }
    }, [])

  return (
    <>
    { props.children }
    </>
  );
}

export default NetworkProvider;