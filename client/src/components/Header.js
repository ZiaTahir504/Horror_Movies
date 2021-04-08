import React, { Fragment } from 'react';
import styled from 'styled-components';

const Div = styled.div`
    width: auto;
    height: 25vh;
    background-color: #3A606E;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5vh;
`;

const Title = styled.h1`
    font-size: 7vw;
    color: #F58549;
    font-family: 'Fredoka One';
    text-shadow: 5px 5px #03191E;
`;

const Header = () => {
    return (
        <Fragment>
            <Div>
                <Title>Zia's Spooky List</Title>
            </Div>
        </Fragment>
    );
};

export default Header;
