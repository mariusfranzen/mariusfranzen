import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core'
import React, { ReactElement } from 'react'
import Profile from './components/ProfileSection/Profile'
import Resume from './components/ResumeSection/Resume'

interface Props {

}

const useStyles = makeStyles((theme) => ({
    root: {
        
    }
}))

const defualtTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#fbc02d"
        }
    }
})

function App({ }: Props): ReactElement {
    const classes = useStyles();

    return (
        <ThemeProvider theme={defualtTheme} >
            <div className={classes.root}>
                <Profile />
                <Resume />
            </div>
        </ThemeProvider>
    )
}

export default App
