import { ActionType } from '../action-types'
import { Action } from '../actions'
import { Dispatch } from 'redux';
import Web3 from "web3";

const web3 = new Web3(window.ethereum);

export const changeThemeMode = () => {
    return async(dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.CHANGE_MODE
        });
    }
}

export const connectToNetwork = () => {
    return async(dispatch: Dispatch<Action>) => {
        dispatch({ type: ActionType.NETWORK_WALLET_CONNECT, payload: { providerConnected: window.ethereum.isConnected() } });

        try {

            if (window.ethereum.isConnected()){

                let addressList = await window.ethereum.request({ method: 'eth_requestAccounts' });

                let balance = await web3.eth.getBalance(addressList[0]);

                dispatch({ type: ActionType.NETWORK_WALLET_CONNECT_SUCCESS, 
                        payload: {
                            address: addressList[0],
                            chainId: window.ethereum.networkVersion,
                            amount: web3.utils.fromWei(balance, 'ether'),
                            symbol: "ETH",
                            providerConnected: window.ethereum.isConnected()
                            }
                        });
            } else {
                dispatch({ type: ActionType.NETWORK_DISCONNECT, payload: { providerConnected: window.ethereum.isConnected() } });
            }
            
        } catch(e: any) {
            dispatch({ 
                type: ActionType.NETWORK_WALLET_CONNECT_FAIL,
                payload: {
                    errorMessage: e.message,
                    providerConnected: window.ethereum.isConnected()
                }
            });
        }
    }
}

export const setProviderStatus = (status: string) => {
    return async(dispatch: Dispatch<Action>) => {

        if(status.toUpperCase() === "CONNECTED") {
            dispatch({ type: ActionType.NETWORK_CONNECT });
        } else {
            dispatch({ type: ActionType.NETWORK_DISCONNECT });
        }
    }
}

export const changeAccounts = (account: string) => {
    return async(dispatch: Dispatch<Action>) => {

        if(account === undefined) {
            dispatch({ type: ActionType.NETWORK_WALLET_DISCONNECT, payload: { providerConnected: window.ethereum.isConnected() } });
        } else {
            
            if (window.ethereum.isConnected()){

                let balance = await web3.eth.getBalance(account);

                dispatch({ type: ActionType.NETWORK_WALLET_CONNECT_SUCCESS, 
                        payload: {
                            address: account,
                            chainId: window.ethereum.networkVersion,
                            amount: web3.utils.fromWei(balance, 'ether'),
                            symbol: "ETH",
                            providerConnected: window.ethereum.isConnected()
                            }
                        });
            } else {
                dispatch({ type: ActionType.NETWORK_DISCONNECT, payload: { providerConnected: window.ethereum.isConnected() } });
            }
        }
    }
}