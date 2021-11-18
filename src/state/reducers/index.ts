import { combineReducers } from "redux"
import themeReducer from "./themeReducer"
import networkReducer from "./networkReducer"

const reducers = combineReducers({
    theme: themeReducer,
    network: networkReducer
})

export default reducers;