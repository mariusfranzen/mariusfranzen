import { Grid, makeStyles, Typography } from '@material-ui/core'
import { PhonelinkOutlined } from '@material-ui/icons'
import React, { ReactElement } from 'react'
import MaterialUi from '../../icons/MaterialUi';

interface Props {

}

const useStyles = makeStyles((theme) => ({
    competence: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }
}))

function Competences({ }: Props): ReactElement {
    const classes = useStyles();

    return (
        <div>
            <Typography variant="h6" gutterBottom>Kompetenser</Typography>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <div className={classes.competence}>
                        <PhonelinkOutlined />
                        <Typography variant="subtitle2">Responsiv design</Typography>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className={classes.competence}>
                        <MaterialUi />
                        <Typography variant="subtitle2">Material UI</Typography>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Competences
