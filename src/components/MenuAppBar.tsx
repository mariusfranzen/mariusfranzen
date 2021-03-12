import { AppBar, IconButton, makeStyles, Toolbar } from '@material-ui/core'
import { GridMenuIcon } from '@material-ui/data-grid'
import React, { ReactElement } from 'react'

interface Props {
    
}

const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.common.white
    }
}))

function MenuAppBar({}: Props): ReactElement {
    return (
        <AppBar position="static" color="secondary">
            <Toolbar>
                <IconButton color="inherit">
                    <GridMenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default MenuAppBar
