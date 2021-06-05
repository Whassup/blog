import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.article`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 0 15%;
`;

const Article = styled.article`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
    background-color: #f7fff6;
    padding: 2rem 4rem;
    border-radius: 1rem;
`;

const H1 = styled.h1`
    font-size: 2rem;
    padding: 0.5rem;

    > * {
        color: #000;
    }
`;

const Date = styled.time`
    color: #95a1b1;
`;

const Body = styled.div`
    text-align: left;
`;

const ReadMore = styled(Link)`
    text-transform: uppercase;
    font-weight: 700;
    color: #000;
`;

export const ArticleList: FunctionComponent = () => {
    return (
        <List>
            <Article>
                <H1>
                    <Link to="/blog/article/how-our-team-writes-tests">
                        How our team writes React tests and other stuff too
                    </Link>
                </H1>
                <Date>5 June 2021</Date>
                <Body>
                    <p>
                        Have you ever worked in a codebase where each test file was different to the next? Different
                        terminology and grouping of test scenarios; different usages of snapshot testing and
                        react-testing-library.
                    </p>

                    <p>
                        The effect of this meant wasted time reading a full test file to understand its structure before
                        adding another test case. Creating new tests involved making multiple decisions; should I copy
                        the structure of an existing test or create a new one? Should I use snapshot tests?
                    </p>

                    <p>
                        We solved this problem by defining guidelines to follow, that make writing tests that are easy
                        to read and write, and would reduced wasted time on decisions.
                    </p>
                </Body>
                <ReadMore to="/blog/article/how-our-team-writes-tests">Read more</ReadMore>
            </Article>

            <Article>
                <H1>
                    <Link to="/blog/article/how-our-team-writes-tests">
                        How our team writes React tests and other stuff too
                    </Link>
                </H1>
                <Date>5 June 2021</Date>
                <Body>
                    <p>
                        Have you ever worked in a codebase where each test file was different to the next? Different
                        terminology and grouping of test scenarios; different usages of snapshot testing and
                        react-testing-library.
                    </p>

                    <p>
                        The effect of this meant wasted time reading a full test file to understand its structure before
                        adding another test case. Creating new tests involved making multiple decisions; should I copy
                        the structure of an existing test or create a new one? Should I use snapshot tests?
                    </p>

                    <p>
                        We solved this problem by defining guidelines to follow, that make writing tests that are easy
                        to read and write, and would reduced wasted time on decisions.
                    </p>
                </Body>
                <ReadMore to="/blog/article/how-our-team-writes-tests">Read more</ReadMore>
            </Article>
        </List>
    );
};
