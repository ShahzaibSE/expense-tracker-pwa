import React from 'react'
import {Grid, Card} from "@material-ui/core"
import {Fade} from "react-awesome-reveal"
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
        <Fade duration={3000}>
            <div>
                <Grid container>
                    <Grid item sm={12} md={12} lg={12}>
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
        </Fade>
    )
}

export default GridComponent
