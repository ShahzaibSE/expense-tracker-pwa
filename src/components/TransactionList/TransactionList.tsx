import React, {useContext, useState} from 'react'
import {globalContext} from "../../context/GlobalContext"
import {Grid, List } from "@material-ui/core"
import {AnimationWrapper} from "react-hover-animation"
// Component.
import Transaction from "./../Transaction/Transaction"
// Assets.
import {useStyles} from "./TransactionList.style"


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
          {
          transactions.map((transaction:any)=>(
              <AnimationWrapper config={{
                  transform:{initial:'scale(0.9)',onHover:'scale(1)'},
                  opacity: {initial:'1',onHover:'1'}
              }}>
                <Transaction transaction={transaction}/>
              </AnimationWrapper>
            )
          )}
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
