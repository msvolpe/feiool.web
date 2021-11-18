import { ActionType } from '../action-types'
import { Action } from '../actions'

interface ThemeState {
    mode: 'light' | 'dark';
}

const initialState = <ThemeState> {
    mode: 'dark'
}

const themeReducer = (state: ThemeState = initialState, action: Action): ThemeState => {

    switch(action.type) {
        case ActionType.CHANGE_MODE:
            return { ...state, mode: state.mode === 'light' ? 'dark' : 'light' };
        default:
            return state;
    }
};

export default themeReducer;