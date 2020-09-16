import React from 'react'
import {Grid, Card} from "@material-ui/core"
// Assets.
import {useStyles} from "./Grid.style"
// Context
import {GlobalProvider} from "./../../context/GlobalContext"
// Components.
import  Header from "./../Header/Header"
import Balance from "./../Balance/Balance"
import IncomeExpense from "./../IncomeExpense/IncomeExpense"
import TransactionList from "./../TransactionList/TransactionList"
import AddTransaction from "./../AddTransaction/AddTransaction"

const GridComponent = () => {
    const classes = useStyles()
    return (
        <div>
            <Grid container>
                <Grid item xs={12} lg={12}>
                        <Card className={classes.root}> 
                            <GlobalProvider>
                                {/* <div className="App"> */}
                                <Header/>
                                <Balance/>
                                <IncomeExpense/>
                                <TransactionList/>
                                <AddTransaction/>
                                {/* </div> */}
                            </GlobalProvider>
                        </Card>
                </Grid>
            </Grid>  
        </div>
    )
}

export default GridComponent
