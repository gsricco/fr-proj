const initialState: InitialStateType = {}

export const templateReducer = (state: InitialStateType = initialState, action: tempReducerActionType): InitialStateType => {
    switch (action.type) {
        case "TYPE":
            return state;
        default:
            return {...state}
    }
}

export const tempAC = () => ({type: 'TYPE'} as const)

//types
export type InitialStateType = {}

export type tempReducerActionType =
    |ReturnType<typeof tempAC>
