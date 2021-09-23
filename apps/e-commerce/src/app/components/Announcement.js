import React from "react";
import styled from 'styled-components';

const Container = styled.div`
    height: 30px;
    background-color: #C90BFF;
    color: white;
    display: flex;
    align-items: center; // center vertically
    justify-content: center; // center horizontally
    font-size: 14px;
    font-weight: 500;
`

const Announcement = () => {
    return(
        <Container>Super Deal! Free Shipping on Orders Over #50</Container>
    )
}


export default Announcement;
