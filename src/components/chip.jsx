import React from "react";
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const ChipSegment = styled.div`
    border-top: ${props => props.$styleTop === "solid" ? "2px solid #4CC9F0" : "none"};
    border-bottom: ${props => props.$styleBottom === "solid" ? "2px solid #4CC9F0" : "none"};
    border-left: ${props => props.$styleLeft === "solid" ? "2px solid #4CC9F0" : "none"};;
    border-right: ${props => props.$styleRight === "solid" ? "2px solid #4CC9F0" : "none"};
    border-radius: 5px;
    padding: 20px;
    justify-self: ${({ $justifyDirection }) => $justifyDirection};
    align-self: ${({ $alignDirection }) => $alignDirection};
    width: 50px;
    height: 50px;
`

export default function Chip({ $styleTop, $styleBottom, $styleLeft, $styleRight, $justifyDirection, $alignDirection }) {
    return <ChipSegment $styleTop={$styleTop} $styleBottom={$styleBottom} $styleLeft={$styleLeft} $styleRight={$styleRight} $justifyDirection={$justifyDirection} $alignDirection={$alignDirection} />;
};