import { SvgIcon } from '@material-ui/core'
import React, { ElementType, ReactElement } from 'react'

interface Props {
    children?: Node
    classes?: object
    color?: 'action' | 'disabled' | 'error' | 'inherit' | 'primary' | 'secondary'
    component?: ElementType
    fontSize?: 'inherit' | 'large' | 'medium' | 'small'
    htmlColor?: string
    shapeRendering?: string
    sx?: object
    titleAccess?: string
    viewBox?: string
}

function MaterialUi({ color, ...rest }: Props): ReactElement {
    return (
        <SvgIcon
            {...rest}
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="820.000000pt"
            height="820.000000pt"
            viewBox="110 125.24998474121094 600 600"
            preserveAspectRatio="xMidYMid meet"
        >
            <g transform="translate(0.000000,820.000000) scale(0.100000,-0.100000)" fill={color} stroke="none">
                <path d="M1100 5027 l0 -1304 373 -216 372 -215 5 864 5 864 744 -430 c409
-237 747 -430 751 -430 4 0 342 193 751 430 l744 430 3 -423 c2 -357 0 -424
-12 -433 -8 -5 -345 -201 -750 -435 l-736 -424 0 -441 0 -442 742 -428 c408
-236 749 -429 758 -429 9 0 519 290 1133 645 l1117 645 0 873 c0 479 -2 872
-3 872 -2 0 -170 -96 -373 -213 l-369 -214 -3 -435 -2 -434 -742 -429 c-409
-236 -749 -429 -758 -429 -15 0 -693 386 -718 409 -10 9 143 102 728 439 l740
428 0 1304 c0 717 -3 1304 -6 1304 -4 0 -507 -289 -1118 -642 -611 -353 -1118
-642 -1126 -642 -8 0 -512 287 -1118 638 -607 350 -1110 640 -1118 643 -12 4
-14 -185 -14 -1300z"></path>
                <path d="M6718 6117 l-368 -212 0 -437 c0 -241 3 -438 7 -438 3 0 172 96 374
213 l369 212 0 438 c0 240 -3 437 -7 437 -5 0 -173 -96 -375 -213z"></path>
            </g>
        </SvgIcon>
    )
}

MaterialUi.defaultProps = {
    color: "inherit",
    fontSize: "medium",
    viewBox: "0 0 24 24"
}

export default MaterialUi
