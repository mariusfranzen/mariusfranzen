import { Paper } from '@material-ui/core'
import React, { ReactElement } from 'react'
import * as Selfie from "../../../static/images/IMG_1253.15775759.jpg"

interface Props {
    
}

function Profile({}: Props): ReactElement {
    return (
        <Paper>
            <img src={Selfie} />
        </Paper>
    )
}

export default Profile
 