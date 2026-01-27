import React from "react";
import styled from "styled-components"

const OuterBorder = styled.div`
    width: fit-content;
    border: 2px solid #4CC9F0;
    background-color: #0B0E20;
    border-radius: 4px;
    padding: 4px;
    margin: auto;
`

const Track = ({ points }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg">
            <polyline points={points}
                style={{ fill: "none", stroke: "green", strokeWidth: 1 }} />
        </svg>
    );
};

export default Track;