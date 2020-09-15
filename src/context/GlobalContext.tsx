import React, {createContext, useReducer} from "react"
import AppReducer from "./AppReducer"

// Initial State.
const initialState:any = {
    transactions: [
          { id: 1, text: 'Flower', amount: -20 },
          { id: 2, text: 'Salary', amount: 300 },
          { id: 3, text: 'Book', amount: -10 },
          { id: 4, text: 'Camera', amount: 150 }
        ]   
}

// Creating our global context.
export const globalContext = createContext(initialState)

// Creating our global Provider Component.
export const GlobalProvider = ({children}:any) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    function deleteTransaction(id:number){
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        })
    }

    function addTransaction(new_transaction: any){
        dispatch({
            type: "ADD_TRANSACTION",
            payload: new_transaction
        })
    }

    return(
        <globalContext.Provider value={{
            transactions:state.transactions,
            deleteTransaction,
            addTransaction
            }}>
            { children }
        </globalContext.Provider>
    )
}