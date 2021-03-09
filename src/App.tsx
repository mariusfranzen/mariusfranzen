import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core'
import React, { ReactElement } from 'react'
import Profile from './components/ProfileSection/Profile'
import Resume from './components/ResumeSection/Resume'

interface Props {

}

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "row"
    },
    profile: {
        maxWidth: "350px"
    }
}))

const defualtTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#4db6ac"
        }
    }
})

function App({ }: Props): ReactElement {
    const classes = useStyles();

    return (
        <ThemeProvider theme={defualtTheme} >
            <div className={classes.root}>
                <div className={classes.profile}>
                    <Profile />
                </div>
                <div>
                    <Resume />
                </div>
            </div>
        </ThemeProvider>
    )
}

export default App
