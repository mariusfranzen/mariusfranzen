import React from 'react'
import ReactDOM from "react-dom";
import App from "./src/App";
import StyledEngineProvider from '@material-ui/core/StyledEngineProvider';
import { CssBaseline } from '@material-ui/core';

ReactDOM.render(
    <StyledEngineProvider injectFirst>
        <CssBaseline/>
        <App />
    </StyledEngineProvider>,
    document.getElementById("root")
)
