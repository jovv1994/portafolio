import React from "react";
import styled from "styled-components"

const Svg = styled.svg`
    background-color: #0B0E20;
`

const Track = ({ points }) => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg">
            <path d="M0-0 L100 200 0"
                style={{fill:"none", stroke:"#4CC9F0", strokeWidth:2}} />
        </Svg>
    );
};

export default Track;