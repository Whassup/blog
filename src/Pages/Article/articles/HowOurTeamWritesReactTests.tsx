import React, { FunctionComponent } from 'react';
import { A, CodeBlock, Date, H1, InlineCode, LI, P, UL } from '../../../shared/typography/typography';

export const HowOurTeamWritesReactTests: FunctionComponent = () => {
    return (
        <>
            <H1>How our team writes React tests and other stuff too</H1>
            <Date>5 June 2021</Date>
            <P>
                Have you ever worked in a codebase where each test file was different to the next? Different terminology
                and grouping of test scenarios; different usages of snapshot testing and react-testing-library.
            </P>
            <P>
                The effect of this meant wasted time reading a full test file to understand its structure before adding
                another test case. Creating new tests involved making multiple decisions; should I copy the structure of
                an existing test or create a new one? Should I use snapshot tests?
            </P>
            <P>
                We solved this problem by defining guidelines to follow, that make writing tests that are easy to read
                and write, and would reduced wasted time on decisions.
            </P>

            <P>Our guidelines are as follows:</P>
            <UL>
                <LI>Group tests by render and user behaviours</LI>
                <LI>Use a snapshot test to validate render</LI>
                <LI>Use GIVEN-WHEN-THEN to describe branching logic</LI>
                <LI>
                    Don&apos;t be afraid to stub child components{' '}
                    <A
                        href="https://ericdcobb.medium.com/advanced-react-component-mocks-with-jest-and-react-testing-library-f1ae8838400b"
                        target="_blank"
                    >
                        also know in Jest as mocking
                    </A>
                </LI>
                <LI>Don&apos;t re-test functionality of other components</LI>
                <LI>
                    Use a single <InlineCode>expect</InlineCode> statement per test
                </LI>
                <LI>Accept unit testing UI components can be difficult</LI>
                <LI>
                    Try use <InlineCode>screen.getByRole</InlineCode>
                </LI>
                <LI>Isolate complex component logic, and test separately</LI>
            </UL>

            <P>
                For each guideline I go into greater detail using this Counter component as an example for our testing
                purposes:{' '}
            </P>

            <CodeBlock>
                {`const Counter = ({ initialCount, steps }) => {
    const [{ count, action }, setCount] = useState(initialCount, action: null });

    const increment = () => {
        setCount(({count }) => { count: count + steps, action: "increment-click" });

    }

    const inputChange = (e) => {
        setCount(({count }) => { count: e.target.value, action: "input-change" });
    }

    return (<>
        <input name="counter" value={count} onChange={inputChange} />
        <button onClick={increment}>Increment</button>
        <Tooltip>increments in steps of {steps}</Tooltip>
    </>
    );
};`}
            </CodeBlock>
        </>
    );
};
