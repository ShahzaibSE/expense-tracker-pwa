import React from 'react'
import {Grid} from "@material-ui/core"
// Assets.
import {useStyles} from "./Grid.style"

const GridComponent = () => {
    const classes = useStyles()
    return (
        <div>
            <Grid container>
                <Grid item sm={12} md={6} lg={6}></Grid>
            </Grid>  
        </div>
    )
}

export default GridComponent
