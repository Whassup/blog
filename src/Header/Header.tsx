import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
    background: green;
`;

export const Header: FunctionComponent = () => {
    return (
        <Wrapper>
            <h1>() =&gt; &quot;rOBERT pRIB&quot;</h1>
            <nav>
                <a>Home</a>
                <a>About me</a>
                <a>Contact</a>
                <a>Test</a>
            </nav>
        </Wrapper>
    );
};
