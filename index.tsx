import React from 'react'
import ReactDOM from "react-dom";
import App from "./src/App";
import StyledEngineProvider from '@material-ui/core/StyledEngineProvider';

ReactDOM.render(
    <StyledEngineProvider injectFirst>
        <App />
    </StyledEngineProvider>,
    document.getElementById("root")
)
