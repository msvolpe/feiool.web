import { ActionType } from '../action-types'
import { Action } from '../actions'

interface NetworkState {
    wallet: string | null;
    amount: number,
    networkId: number;
    symbol: string;
    error: string;
    connecting: boolean;
    providerConnected: boolean;
}

const initialState = <NetworkState> {
    wallet: null,
    amount: 0,
    networkId: 0,
    symbol: "",
    error: "",
    connecting: false,
    providerConnected: false
}

const themeReducer = (state: NetworkState = initialState, action: Action): NetworkState => {

    switch(action.type) {
        case ActionType.NETWORK_WALLET_CONNECT:
            return { ...state, connecting: true, providerConnected: action.payload.providerConnected };
        case ActionType.NETWORK_WALLET_CONNECT_SUCCESS:
            return { ...state, connecting: false, wallet: action.payload.address, networkId: action.payload.chainId, error: "", amount: action.payload.amount, providerConnected: action.payload.providerConnected };
        case ActionType.NETWORK_WALLET_CONNECT_FAIL:
                return { ...state, connecting: false, wallet: null, networkId: 0, error: action.payload.errorMessage, providerConnected: action.payload.providerConnected };
        
        case ActionType.NETWORK_WALLET_DISCONNECT:
                return { ...initialState, providerConnected: action.payload.providerConnected };
        
        case ActionType.NETWORK_CONNECT:
            return { ...state, providerConnected: true };
        case ActionType.NETWORK_DISCONNECT:
            return { ...state, providerConnected: false };

        default:
            return state;
    }
};

export default themeReducer;