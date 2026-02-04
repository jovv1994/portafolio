import React from "react";
import styled from "styled-components"

const Svg = styled.svg`
    background-color: #0B0E20;
`

const Track = ({ points }) => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg">
            <polyline points={points}/>
        </Svg>
    );
};

export default Track;