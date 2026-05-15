import React from "react";
import styled from "styled-components"

const Svg = styled.svg`
    background-color: #0B0E20;
    position: absolute;
    top: 0;
    left: 0;
`

const Track = ({ points }) => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg">
            <path d="M0 20 L500 20 L550 500 L0 500"
                style={{fill:"none", stroke:"#4CC9F0", strokeWidth:2}} />
        </Svg>
    );
};

export default Track;