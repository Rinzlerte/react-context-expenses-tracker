import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const TransAction = (props) => {

    const { deleteTransaction } = useContext(GlobalContext);

    const {data} = props;
    const sign = data.amount < 0 ? '-' : '+';

    return (
      <li className={data.amount < 0 ? "minus" : "plus"} key={data.id}>
        {data.text}{" "}
        <span>
          {sign}${Math.abs(data.amount)}
        </span>
        <button className="delete-btn" onClick={(e)=>deleteTransaction(data.id)}>
          x
        </button>
      </li>
    );
}
