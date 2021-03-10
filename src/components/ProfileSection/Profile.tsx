import { Avatar, Card, makeStyles, Typography } from '@material-ui/core'
import React, { ReactElement } from 'react'
import Competences from './Competences';

interface Props {

}

const useStyles = makeStyles((theme) => ({
    profile: {
        backgroundColor: theme.palette.primary.main,
        position: "absolute",
        width: "50%",
        minWidth: "300px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        width: theme.spacing(30),
        height: theme.spacing(30),
        boxShadow: "0 5px 20px"
    },
    section: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: theme.spacing(7)
    }
}))

function Profile({ }: Props): ReactElement {
    const classes = useStyles();

    return (
        <div className={classes.profile}>
            <div className={classes.section}>
                <Avatar alt="Marius Franzén" src="../../../images/IMG_1253.15775759.jpg" className={classes.avatar} />
                <Typography variant="h3" fontWeight="bold" marginTop="20px">Marius Franzén</Typography>
            </div>
            <Typography variant="h4" marginTop="20px">Full stack och system utvecklare</Typography>
        </div>
    )
}

export default Profile
