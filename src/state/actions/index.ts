import { ActionType } from '../action-types'

interface ChangeModeAction {
    type: ActionType.CHANGE_MODE;
    payload?: any;
}

// NETWORK
interface NetworkConnect {
    type: ActionType.NETWORK_CONNECT
    payload?: any;
}

interface NetworkDisconnect {
    type: ActionType.NETWORK_DISCONNECT
    payload?: any;
}

// NETWORK CONNECT
interface NetworkWalletConnect {
    type: ActionType.NETWORK_WALLET_CONNECT
    payload?: any;
}

interface NetworkWalletConnectSuccess {
    type: ActionType.NETWORK_WALLET_CONNECT_SUCCESS
    payload?: any;
}

interface NetworkWalletConnectFail {
    type: ActionType.NETWORK_WALLET_CONNECT_FAIL
    payload?: any;
}

// NETWORK DISCONNECT
interface NetworkWalletDisconnect {
    type: ActionType.NETWORK_WALLET_DISCONNECT
    payload?: any;
}

interface NetworkWalletDisconnectSuccess {
    type: ActionType.NETWORK_WALLET_DISCONNECT_SUCCESS
    payload?: any;
}

interface NetworkWalletDisconnectFail {
    type: ActionType.NETWORK_WALLET_DISCONNECT_FAIL
    payload?: any;
}

// NETWORK CHANGE ACCOUNT
interface ChangeAccounts {
    type: ActionType.NETWORK_ACCOUNT_CHANGE
    payload?: any;
}

interface ChangeAccountsSuccess {
    type: ActionType.NETWORK_ACCOUNT_CHANGE_SUCCESS
    payload?: any;
}

interface ChangeAccountsFail {
    type: ActionType.NETWORK_ACCOUNT_CHANGE_FAIL
    payload?: any;
}

export type Action = ChangeModeAction | 
                     NetworkWalletConnect | 
                     NetworkWalletConnectSuccess | 
                     NetworkWalletConnectFail |
                     NetworkWalletDisconnect |
                     NetworkConnect |
                     NetworkDisconnect |
                     ChangeAccounts |
                     ChangeAccountsSuccess |
                     ChangeAccountsFail;