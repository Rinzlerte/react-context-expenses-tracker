import React, {useContext} from 'react'
import { GlobalContext} from '../context/GlobalState'
import { TransAction } from './TransAction'
  

export const TransactionsList = () => {

    const { transactions } = useContext(GlobalContext);

    return (
        <React.Fragment>
            <h3>History</h3>
            <ul id="list" className="list">
                {
                    transactions.map(transaction=>(
                      <TransAction data={transaction} key={transaction.id}/>
                    ))
                }
            </ul>
        </React.Fragment>
       
    )
}
