import { makeStyles, Typography } from '@material-ui/core'
import React, { ReactElement } from 'react'
import Competences from './Competences';

interface Props {

}

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme.palette.primary.main
    },
    image: {
        maxWidth: "75%"
    },
    inner: {
        padding: "10px",
        "& > *": {
            marginBottom: "5px"
        }
    }
}))

function Profile({ }: Props): ReactElement {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <img src="../../../images/IMG_1253.15775759.jpg" className={classes.image} />
            <div className={classes.inner}>
                <Typography variant="h4">Marius Franzén</Typography>
                <Typography variant="h6">Full stack utvecklare</Typography>
                <Typography>Jag har alltid varit väldigt teknikintresserad. Först läste jag till elektriker på gymnasiet, men ändrade sedan inriktning till datorteknik, då jag brinner för datorer och programmering. Jag har programmerat en hel del på min fritid, och även om jag har utbildning i programmering så är jag till största delen självlärd.</Typography>
                <Competences />
            </div>
        </div>
    )
}

export default Profile
