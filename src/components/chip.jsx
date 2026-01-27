import React from "react";
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import Track from "./track";    

const OuterBorder = styled.div`
    width: fit-content;
    border: 2px solid #4CC9F0;
    background-color: #0B0E20;
    border-radius: 10px;
    padding: 2px;
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
            <Track points={"0,10 200,10 210,25 210,100 100,100 100,115"}/>
            <Track points={"0,50 50,30 210,25 210,100 100,100 100,115"}/>
            <OuterBorder>
                <InnerBorder>
                    <Content>
                        <StaticImage
                            src="../images/icon.png"
                            alt="Avatar"
                            layout="fixed"
                            width={150}
                            height={150}
                        />
                    </Content>
                </InnerBorder>
            </OuterBorder>
        </>
    );
};

export default Chip;