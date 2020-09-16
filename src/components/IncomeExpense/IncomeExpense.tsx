import React,{useContext} from 'react'
// Context
import {globalContext} from "../../context/GlobalContext"

const IncomeExpense = () => {
    const { transactions } = useContext(globalContext)
    let amounts = transactions.map((transaction:any) => transaction.amount)
    //
    const income = amounts
        .filter((item:any) => item > 0)
        .reduce((acc:any, item:any) => (acc += item), 0)
        .toFixed(2);
        //
        const expense = (
            amounts.filter((item:any) => item < 0).reduce((acc:any, item:any) => (acc += item), 0) *
            -1
        ).toFixed(2);
    //
    return (
        <div className="inc-exp-container">
        <div>
        <h4>Income</h4>
            <p className="money plus">${income}</p>
        </div>
        <div>
        <h4>Expense</h4>
        <p className="money minus">${expense}</p>
        </div>
    </div>
    )
}

export default IncomeExpense