import React from "react";
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import Track from "./track";    

const OuterBorder = styled.div`
    width: fit-content;
    border: 2px solid #4CC9F0;
    background-color: #0B0E20;
    border-radius: 4px;
    padding: 4px;
    margin: auto;
`

const InnerBorder = styled.div`
    border: 1px solid #4CC9F0;
    background-color: #0B0E20;
    border-radius: 8px;
    padding: 8px;
`

const Content = styled.div`
    border: 1px solid #4CC9F0;
    background-color: #0B0E20;
    border-radius: 12px;
`

const Chip = () => {
    return (
        <>
            <Track />
            <OuterBorder>
                <InnerBorder>
                    <Content>
                        <StaticImage
                            src="../images/icon.png"
                            alt="Avatar"
                            layout="fixed"
                            width={200}
                            height={200}
                        />
                    </Content>
                </InnerBorder>
            </OuterBorder>
        </>
    );
};

export default Chip;