import React, { FunctionComponent } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import { hopscotch } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from 'styled-components';

SyntaxHighlighter.registerLanguage('jsx', jsx);

export const H1 = styled.h1`
    font-size: 2.5rem;
    font-weight: 700;

    > * {
        color: #000;
    }
`;

export const Date = styled.time`
    color: #95a1b1;
`;

export const P = styled.p`
    margin-bottom: 1.5rem;
    text-align: left;
`;

export const UL = styled.ul`
    margin-bottom: 1.5rem;
    text-align: left;
`;

export const LI = styled.li`
    margin-bottom: 1rem;
    margin-left: 1.5rem;
    text-align: left;
    list-style: disc;
    list-style-position: inside;
`;

export const A = styled.a`
    color: #2379be;
    text-decoration: underline;
`;

// eslint-disable-next-line react/prop-types
export const CodeBlock: FunctionComponent = ({ children }) => (
    <SyntaxHighlighter language="jsx" style={hopscotch} wrapLongLines codeTagProps={{ style: { fontSize: '1.25rem' } }}>
        {children}
    </SyntaxHighlighter>
);
