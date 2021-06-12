import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.header`
    display: flex;
    flex-direction: column;
    padding: 4rem 2rem;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 3.5rem;
    font-family: 'Courier New', Courier, monospace;
    margin-bottom: 4rem;
`;

const TitleName = styled.strong`
    font-family: 'Courier New', Courier, monospace;
    color: #000;
    font-weight: 700;
`;

const Navigation = styled.nav`
    display: flex;
    gap: 1rem;
    justify-content: center;
`;

const NavLink = styled(Link)`
    text-decoration: none;
    text-transform: uppercase;
    color: #95a1b1;
`;

export const Header: FunctionComponent = () => {
    return (
        <Wrapper>
            <Title>
                () =&gt; &quot;<TitleName>Robert Prib</TitleName>&quot;
            </Title>
            <Navigation>
                <NavLink to="/blog">Home</NavLink>
                <NavLink to="/blog/about-me">About me</NavLink>
                <NavLink to="/blog/contact">Contact</NavLink>
            </Navigation>
        </Wrapper>
    );
};
