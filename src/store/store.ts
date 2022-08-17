import {templateReducer} from "./templateReducer";
import {combineReducers, legacy_createStore as createStore} from "redux";


const rootReducer = combineReducers({
    template: templateReducer
})

export const store = createStore(rootReducer)

export default store

//types
export type AppStoreType = ReturnType<typeof rootReducer>