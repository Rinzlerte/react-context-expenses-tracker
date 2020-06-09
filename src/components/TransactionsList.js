import React, {useContext} from 'react'
import { GlobalContext} from '../context/GlobalState'

export const TransactionsList = () => {

    const {transactions}= useContext(GlobalContext);

    return (
        <React.Fragment>
            <h3>History</h3>
            <ul id="list" className="list">

                {
                    transactions.map(transaction=>(
                        <li className="minus" key={transaction.id}>
                            Cash <span>{transaction.text}</span><button className="delete-btn">x</button>
                        </li>

                    ))
                }
              
            </ul>
        </React.Fragment>
       
    )
}
