import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ArticleMeta, H1, LI, P, UL } from '../shared/typography/typography';

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
                    <Link to="/blog/article/heres-what-happened-after">
                        Here&apos;s what happened after publishing my first article
                    </Link>
                </H1>
                <ArticleMeta>
                    <time>12 August 2021</time>
                </ArticleMeta>
                <Body>
                    <P>
                        This year I published my first article &quot;How our team writes React tests and other stuff
                        too&quot; . What happened after sharing my content didn&apos;t follow the script I had
                        envisioned. The results are not surprising; here is what happened.
                    </P>

                    <UL>
                        <LI>Viewership was lower than I expected</LI>
                        <LI>No one commented</LI>
                        <LI>Reddit removed my posts</LI>
                        <LI>Sharing this content was useful for myself</LI>
                        <LI>I gained valuable insights</LI>
                        <LI>There is a great deal more for me to learn about writing & publishing online</LI>
                    </UL>
                </Body>
                <ReadMore to="/blog/article/heres-what-happened-after">Read more</ReadMore>
            </Article>
            <Article>
                <H1>
                    <Link to="/blog/article/how-our-team-writes-tests">
                        How our team writes React tests and other stuff too
                    </Link>
                </H1>
                <ArticleMeta>
                    <time>5 June 2021</time>
                </ArticleMeta>
                <Body>
                    <P>
                        Have you ever worked in a codebase where each test file was different to the next? Different
                        terminology and grouping of test scenarios; different usages of snapshot testing and
                        react-testing-library.
                    </P>

                    <P>
                        The effect of this meant wasted time reading a full test file to understand its structure before
                        adding another test case. Creating new tests involved making multiple decisions; should I copy
                        the structure of an existing test or create a new one? Should I use snapshot tests?
                    </P>

                    <P>
                        We solved this problem by defining guidelines to follow, that make writing tests that are easy
                        to read and write, and would reduced wasted time on decisions.
                    </P>
                </Body>
                <ReadMore to="/blog/article/how-our-team-writes-tests">Read more</ReadMore>
            </Article>
        </List>
    );
};
