import { Button, makeStyles, Paper, Typography } from '@material-ui/core'
import React, { ReactElement } from 'react'

interface Props {

}

const useStyles = makeStyles((theme) => ({
    paper: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "50px",
        backgroundImage: "url(../../../../static/images/banner-1623469.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto",
        color: theme.palette.common.white
    },
    image: {
        maxWidth: "15%",
        border: "5px solid white",
        borderRadius: "5px",
        boxShadow: "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%)"
    },
    buttons: {
        marginTop: "50px",
        width: "300px",
        display: "flex",
        justifyContent: "space-between",
        "& > button": {
            color: theme.palette.common.white
        }
    }
}))

function Profile({ }: Props): ReactElement {
    const classes = useStyles();
    return (
        <Paper className={classes.paper} elevation={5}>
            <img src="../../../../static/images/IMG_1253.15775759.jpg" className={classes.image} />
            <Typography variant="h3" marginTop="20px">Marius Franzén</Typography>
            <Typography variant="body1">Full stack och system utvecklare</Typography>
            <div className={classes.buttons}>
                <Button variant="outlined" color="inherit">Hämta CV</Button>
                <Button variant="contained">Anställ mig</Button>
            </div>
        </Paper>
    )
}

export default Profile
