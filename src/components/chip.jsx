import React from "react";
import styled from "styled-components"

const SVG = styled.svg`
    padding: 10px;
`;

const OuterBorderChip = styled.rect`
    fill: none;
    stroke: #4CC9F0;
    stroke-width: 2;
    margin: 5px;
`;

const InnerBorderChip = styled.rect`
    fill: none;
    stroke: #4CC9F0;
    stroke-width: 2;
`;

const CenterChip = styled.rect`
    fill: #4CC9F0;
`;

export default function Chip() {
    return (
        <SVG
            width="210"
            height="210"
            xmlns="http://www.w3.org/2000/svg"
        >
            <OuterBorderChip
                width="200"
                height="200"
                rx="10"
                ry="10"
                x="5"
                y="5"
            >
                <animate
                    attributeName="cx"
                    begin="0s"
                    dur="8s"
                    from="50"
                    to="90%"
                    repeatCount="indefinite" />
            </OuterBorderChip>

            <InnerBorderChip
                width="190"
                height="190"
                rx="10"
                ry="10"
                x="10"
                y="10"
            />

            <defs>
                <filter id="f1" width="120" height="120">
                    <feOffset in="SourceGraphic" />
                    <feGaussianBlur stdDeviation="10" />
                    <feBlend in="SourceGraphic" in2="blurOut" />
                </filter>
            </defs>

            <CenterChip
                width="160"
                height="160"
                rx="10"
                ry="10"
                x="25"
                y="25"
                filter="url(#f1)"
            />
        </SVG>
    )
}