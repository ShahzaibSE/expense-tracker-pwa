import React, {useContext, useRef} from 'react'
import {Button, TextField} from "@material-ui/core"
import {createMuiTheme, ThemeProvider, makeStyles} from "@material-ui/core/styles"
import { purple } from '@material-ui/core/colors'
import Alert from "@material-ui/lab/Alert"
// Getting context.
import {globalContext} from "./../../context/GlobalContext"
// Assets.
import {useStyles, theme} from "./AddTransaction.style"


export const AddTransactionComponent = () => {
    const [text, setText] = React.useState('')
    const [amount, setAmount] = React.useState('')
    let {addTransaction} = useContext(globalContext)
    let classes = useStyles()
    const text_field: any | null = useRef(null)
    const amount_field: any | null = useRef(null)
    let isText = true
    let isAmount = true
    // e for event.
    const onSubmit = (e:any) => {
        e.preventDefault()
        let new_transaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }
        if (text_field.current.value && amount_field.current.value) {
            addTransaction(new_transaction)
            setText('')
            setAmount('')
        } else if(!text){
            isText = false
            
        }else if (!amount) {
            isAmount = false
        }
        else {
            isText = false
            isAmount = false
            console.log("Please provide text and amount.")
        }
        setText('')
        setAmount('')
    }
    return (
        <div>
            <h3 style={{marginBottom:25}}>Add new transaction</h3>
            <form className={classes.root}>
                {/* <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={text} 
                       onChange={(e)=>{setText(e.target.value)}} placeholder="Enter text..." />
                </div> */}
                <TextField ref={text_field} id="text_field" label="Text" variant="outlined"
                value={text} onChange={(e)=>{setText(e.target.value)}}></TextField><br/>
                {/* <div className="form-control">
                <label htmlFor="amount">Amount <br />
                    (negative - expense, positive - income)</label>
                <input type="number" value={amount} onChange={(e)=>{setAmount(e.target.value)}}
                 placeholder="Enter amount..." />
                </div> */}
                <TextField ref={amount_field} id="amount_field" label="Amount" variant="outlined" value={amount} onChange={(e)=>{setAmount(e.target.value)}}>
                </TextField>
                <br/>
                <br/>
                {/* <button className="btn">Add transaction</button> */}
                <ThemeProvider theme={theme}>
                    <Button className="btn-custom-material" variant="contained" color="primary" onClick={onSubmit}>Add Transaction</Button>
                </ThemeProvider>
            </form>
            <br/>
        </div>
    )
}
