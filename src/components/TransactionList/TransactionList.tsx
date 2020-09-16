import React, {useContext, useState} from 'react'
import {globalContext} from "../../context/GlobalContext"
import {Grid, List, makeStyles} from "@material-ui/core"
// Component.
import Transaction from "./../Transaction/Transaction"

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    // position: 'relative',
    overflow: 'scroll',
    maxHeight: 250,
  }
}));

const TransactionList = () => {
  const context = useContext(globalContext)
  const classes = useStyles()
  let transactions = context.transactions
  // Material list generator.
  const [dense, setDense] = useState(true)
  //
    return (
       <Grid container style={{display:"block"}}>
        <Grid item sm={12} md={12} lg={12}> 
         <h3>History</h3>
         <List dense={dense} className={`${classes.root}`}>
          {transactions.map((transaction:any)=>(<Transaction transaction={transaction}/>))}
         </List>
        {/* <h3>History</h3>
        <ul className="list">
          {transactions.map(transaction=>(<TransactionComponent transaction={transaction}/>))}
        </ul> */}
        </Grid>
      </Grid>
    )
}

export default TransactionList
