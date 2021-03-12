import React, { ReactElement } from 'react'
import Profile from './components/sections/profile/Profile'

interface Props {
    
}

function App({}: Props): ReactElement {
    return (
        <div>
            Hello world
            <Profile />
        </div>
    )
}

export default App
