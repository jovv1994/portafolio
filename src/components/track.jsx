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

const Track = () => {
    return (
        <>
            <svg height="210" width="500" xmlns="http://www.w3.org/2000/svg">
                <polyline points="0,0 50,150 100,75 150,50 200,140 250,140"
                    style={{fill:"none",stroke:"green",strokeWidth:3}} />
            </svg>
        </>
    );
};

export default Track;