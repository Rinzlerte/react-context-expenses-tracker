import React, { createContext , useReducer} from 'react'

import AppReducer from './AppReducer'

// inithiating globalstate
const InitialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
    { id: 5, text: "Cam", amount: 100 },
  ],
};

// creating context
export const GlobalContext = createContext(InitialState);

//porvaider for accesing this store by components

export const GlobalProvaider = ({children}) => {
     const [state, dispatch] = useReducer( AppReducer, InitialState);

//   needs Actions for calling reducer
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE TRANSACTION',
            // type is always text
            payload: id
            // paylad is always data to send
        })
    }

    function addTransaction(transaction) {
        dispatch({
          type: "ADD TRANSACTION",
          // type is always text
          payload: id,
          // paylad is always data to send
        });
    }

     return (
         <GlobalContext.Provider value={{
             transactions : state.transactions,
             deleteTransaction
         }}>
             {children}
         </GlobalContext.Provider>
     )
}