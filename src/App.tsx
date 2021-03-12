import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core'
import { amber, cyan } from '@material-ui/core/colors';
import React, { ReactElement } from 'react'
import MenuAppBar from './components/MenuAppBar';
import Profile from './components/sections/profile/Profile'

interface Props {

}

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    innerContainer: {
        width: "60%",
        marginTop: "30px"
    }
}))

const defaultTheme = createMuiTheme({
    palette: {
        primary: {
            main: cyan[500]
        },
        secondary: {
            main: amber[500]
        }
    }
})

function App({ }: Props): ReactElement {
    const classes = useStyles();

    return (
        <ThemeProvider theme={defaultTheme}>
            <div className={classes.container}>
                <MenuAppBar />
                <div className={classes.innerContainer}>
                    <Profile />
                </div>
            </div>
        </ThemeProvider>
    )
}

export default App
