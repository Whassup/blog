import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

export const ArticleList: FunctionComponent = () => {
    return (
        <article>
            <article>
                <h1>
                    <Link to="/blog/article/how-our-team-writes-tests">
                        How our team writes React tests and other stuff too
                    </Link>
                </h1>
                <time>5 June 2021</time>
                <div>
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
                </div>
                <Link to="/blog/article/how-our-team-writes-tests">Read more</Link>
            </article>
        </article>
    );
};
