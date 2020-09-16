import React, {useContext} from 'react'
import {globalContext} from "../../context/GlobalContext"
import {ListItem, ListItemText, ListItemSecondaryAction,
        IconButton} from "@material-ui/core"
import DeleteIcon from '@material-ui/icons/Delete'

const incomeTheme = {
     background:'linear-gradient(45deg, #ccffcc 30%, #66ffcc 90%)'
}

const expenseTheme = {
     background: 'linear-gradient(45deg,  #ff9966 30%, #ff6600 90%)'
}

const Transaction = ({transaction}:any) => {
    let sign = transaction.amount > 0 ? "+" : "-"
    const {deleteTransaction} = useContext(globalContext)
    //
    return (
        <ListItem style={transaction.amount < 0 ? expenseTheme : incomeTheme}>
            <ListItemText primary={transaction.text}
                          secondary= {`${sign}$${Math.abs(transaction.amount)}`}/>
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon onClick={()=>deleteTransaction(transaction.id)} />
                    </IconButton>
                  </ListItemSecondaryAction>
        </ListItem>
        // <li className={transaction.amount < 0 ? 'minus': 'plus'}>
        // {transaction.text} <span>{sign}${Math.abs(transaction.amount)}
        //                    </span><button className="delete-btn" onClick={()=>deleteTransaction(transaction.id)}>
        //                        x</button>
        // </li>
    )
}

export default Transaction
