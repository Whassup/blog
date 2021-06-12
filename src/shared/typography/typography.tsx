import React, { FunctionComponent, ReactNode } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from 'styled-components';

SyntaxHighlighter.registerLanguage('jsx', jsx);

export const H1 = styled.h1`
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;

    > * {
        color: #000;
    }
`;

export const H2 = styled.h2`
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
`;

export const ArticleMeta = styled.section`
    color: #95a1b1;
    fill: #95a1b1;
    display: block;
    margin-bottom: 1.25rem;
`;

export const P = styled.p`
    margin-bottom: 1.25rem;
    margin-top: 0.5rem;
    text-align: left;
`;

export const UL = styled.ul`
    margin-bottom: 1.5rem;
    text-align: left;
`;

export const LI = styled.li`
    margin-bottom: 0.5rem;
    margin-left: 1.5rem;
    text-align: left;
    list-style: disc;
    list-style-position: inside;
`;

export const A = styled.a`
    color: #2379be;
    text-decoration: underline;
`;

export const Strong = styled.strong`
    font-weight: 400;
`;

export const CodeBlock: FunctionComponent = ({ children }) => (
    <SyntaxHighlighter
        language="jsx"
        style={solarizedlight}
        wrapLongLines
        codeTagProps={{ style: { fontSize: '1rem', maxHeight: '400px', display: 'block' } }}
    >
        {children}
    </SyntaxHighlighter>
);

export const InlineCode = styled.code`
    color: #f55e00;
    background-color: rgb(253, 246, 227);
    border-radius: 0.1em;
    padding: 0.5rem 0.5rem;
    white-space: nowrap;
`;

const QuoteWrapper = styled.figure`
    padding-left: 1rem;
    border-left: 10px solid #35fdbe;
    font-style: italic;
    font-size: 1rem;
    font-weight: 400;
`;
const QouteSource = styled.figcaption`
    font-weight: 300;
`;

interface QouteProps {
    source: ReactNode;
    cite: ReactNode;
    citeLink: string;
}
export const Quote: FunctionComponent<QouteProps> = ({ children, source, cite, citeLink }) => {
    return (
        <QuoteWrapper>
            <blockquote cite={citeLink}>{children}</blockquote>
            {(source || cite) && (
                <QouteSource>
                    — {source}
                    {cite && (
                        <cite>
                            ,{' '}
                            {citeLink ? (
                                <A href={citeLink} target="_blank">
                                    {cite}
                                </A>
                            ) : (
                                { cite }
                            )}
                        </cite>
                    )}
                </QouteSource>
            )}
        </QuoteWrapper>
    );
};

export const SvgIcon = styled.i`
    svg {
        width: 1rem;
    }
`;
