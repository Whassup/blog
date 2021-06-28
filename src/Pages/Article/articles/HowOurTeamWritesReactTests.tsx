import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';
import { ReactComponent as CalendarDayIcon } from '../../../assets/svgs/solid/calendar-day.svg';
import { ReactComponent as StopWatchIcon } from '../../../assets/svgs/solid/stopwatch.svg';
import {
    A,
    ArticleMeta,
    CodeBlock,
    H1,
    H2,
    InlineCode,
    LI,
    P,
    Quote,
    Strong,
    SvgIcon,
    UL,
} from '../../../shared/typography/typography';

export const HowOurTeamWritesReactTests: FunctionComponent = () => {
    return (
        <>
            <Helmet>
                <title>How our team writes React tests and other stuff too | Robert Prib | Blog </title>
                <meta
                    name="description"
                    content="Write React tests that are easy to read, write and reduced wasted time on decisions."
                />
                <meta
                    name="og:title"
                    content="How our team writes React tests and other stuff too | Robert Prib | Blog "
                />
                <meta
                    name="og:description"
                    content="Write React tests that are easy to read, write and reduced wasted time on decisions."
                />
                <meta name="og:url" content="https://whassup.github.io/blog/article/how-our-team-writes-tests" />
                <meta name="og:image" content="https://whassup.github.io/blog/article/how-our-team-writes-tests" />
            </Helmet>
            <H1>How our team writes React tests and other stuff too</H1>
            <ArticleMeta>
                <time>
                    <SvgIcon>
                        <CalendarDayIcon />
                    </SvgIcon>{' '}
                    5 June 2021
                </time>{' '}
                <span>
                    <SvgIcon>
                        <StopWatchIcon />
                    </SvgIcon>{' '}
                    8 minute read
                </span>
            </ArticleMeta>

            <section>
                <P>
                    Have you ever worked in a codebase where each test file was different to the next? Different
                    terminology and grouping of test scenarios; different usages of snapshot testing and
                    react-testing-library.
                </P>
                <P>
                    The effect of this meant wasted time reading a full test file to understand its structure before
                    adding another test case. Creating new tests involved making multiple decisions; should I copy the
                    structure of an existing test or create a new one? Should I use snapshot tests?
                </P>
                <P>
                    We solved this problem by defining guidelines to follow, that make writing tests that are easy to
                    read and write, and would reduced wasted time on decisions.
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
                    For each guideline I go into greater detail using this Counter component as an example for our
                    testing purposes:{' '}
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
            </section>
            <section>
                <H2>Group tests by render and user behaviours</H2>
                <P>Group tests into describe blocks named render and behaviours at the top level. </P>
                <p>The main advantages of grouping the tests is to:</p>
                <UL>
                    <LI>Provide clarity to the reviewer/collaborator on where to find or add a specific test case</LI>
                    <LI>
                        Prompt the initial test author(s) to include tests for the two main scenarios that need testing:
                        <UL>
                            <LI>Assert on things that appear on render</LI>
                            <LI>Assert on things that change after an user interaction</LI>
                        </UL>
                    </LI>
                </UL>
                <CodeBlock>{`describe("<Counter />", () => {
    describe("render" => () => {
        // include your tests for things that should happen on render
    });

    describe("behaviours" => () => {
        // include your tests for things that should happen after user interactions
    });
});`}</CodeBlock>
            </section>
            <section>
                <H2>Use a snapshot test to validate render</H2>
                <P>
                    Snapshots are good for validating regressions when refactoring code and capturing changes to shared
                    styled components. However snapshots have drawbacks, as they can:{' '}
                </P>
                <UL>
                    <LI>Slow down the test suite</LI>
                    <LI>Slow down the test suite</LI>
                    <LI>Generate errors in multiple components when making a minor change to a single component.</LI>
                </UL>
                <P>As such the guidelines for using snapshot tests are as follows:</P>
                <UL>
                    <LI>
                        Generate at least 1 snapshot test per component on render to:
                        <UL>
                            <LI>Validate shared styled-component changes that could affect this component.</LI>
                            <LI>Validate any regressions when code refactoring.</LI>
                            <LI>
                                Mock child components to reduce time to produce snapshots and to reduce the triggering
                                of errors when making changes to components.{' '}
                                <Strong>(See section Don&apos;t be afraid to stub child components).</Strong>
                            </LI>
                        </UL>
                    </LI>
                    <LI>
                        Consider removing existing snapshots and generating new snapshots when making substantial
                        changes to component functionality
                    </LI>
                    <LI>
                        When refactoring a component you should use the{' '}
                        <A href="https://jestjs.io/docs/snapshot-testing#interactive-snapshot-mode" target="_blank">
                            interactive update snapshot mode
                        </A>{' '}
                        to update and review any changes to snapshots.
                    </LI>
                    <LI>Closely review changes to snapshots in PRs as so not miss regressions</LI>
                </UL>
                <CodeBlock>{`describe("<Counter />", () => {
	describe("render" => () => {
		it("SHOULD render", () => {
			const { asFragment } = render(<Counter />);
			expect(asFragment()).toMatchSnapshot();
		});
	});

	describe("behaviours" => () => {
		// include your tests for things that should happen after user interactions*
	});

});`}</CodeBlock>
            </section>
            <section>
                <H2>Use GIVEN-WHEN-THEN to describe branching logic</H2>
                <P>
                    The biggest improvement to our tests readability has been determining a consistent language and
                    structure for our test descriptions – and for not a lot of effort! We found that using the
                    <A href="https://www.agilealliance.org/glossary/gwt" target="_blank">
                        GIVEN-WHEN-THEN
                    </A>{' '}
                    structure works really well for describing component tests when using the `react-testing-library`.
                </P>
                <P>
                    <Strong>GIVEN</Strong> some context e.g. some component props, context, or state
                </P>
                <P>
                    <Strong>WHEN</Strong> some action is carried out e.g. a button is clicked or an user types in an
                    input
                </P>
                <P>
                    <Strong>THEN</Strong> a particular set of observable set of consequences <Strong>SHOULD</Strong>{' '}
                    happen - e.g. some text has changed or no longer displays in the browser.
                </P>
                <P>We use GIVEN-WHEN-THEN in the following manner:</P>
                <UL>
                    <LI>
                        Write the keywords <InlineCode>GIVEN, WHEN, AND, NOT, SHOULD</InlineCode> in uppercase to make
                        the structure easy to identify and read.
                    </LI>
                    <LI>
                        Start with <InlineCode>GIVEN before WHEN</InlineCode>
                    </LI>
                    <LI>Strict adherence is not required to the structure, focus should be placed on readability</LI>
                </UL>
                <P>
                    You will notice the example below creates meaningful sentences that describes each test scenario
                    e.g.
                </P>
                <UL>
                    <LI>
                        <InlineCode>{`<Counter />`}</InlineCode> render GIVEN a initial count AND steps great than zero
                        SHOULD display provided count
                    </LI>
                    <LI>
                        <InlineCode>{`<Counter />`}</InlineCode> behaviours WHEN a user clicks increase count button
                        GIVEN steps SHOULD display provided count
                    </LI>
                </UL>
                <CodeBlock>{`describe("<Counter />", () => {
    describe("render" => () => {
        it("SHOULD render", () => {
                // snapshot test
        });

        describe("GIVEN NO intial count", () => {
            describe("AND steps greater than 0", () => {
                it("SHOULD display count zero", () => {
                    // ...
                });
            });
        });

        describe("GIVEN a initial count", () => {
            it("SHOULD display provided count", () => {
                // ...
            });

            describe("AND steps greater than 0", () => {
                it("SHOULD display steps amount", () => {
                        // ...
                });
            });

            describe("AND steps is 0", () => {
                it("SHOULD NOT display counter", () => {
                    // ...
                });
                it("SHOULD THROW steps must be greater than 0 error", () => {
                    // ...
                });
            });
        });

    });

    describe("behaviours" => () => {

        describe("WHEN a user clicks increase count button", () => {
            it("SHOULD display incremented count", () => {
                    // ...
            });
        });
    
        describe("WHEN a user clicks increase count button multiple times", () => {
            it("SHOULD display incremented count", () => {
                    // ...
            });
        });

        describe("GIVEN steps", () => {
            describe("WHEN a user clicks increase count button", () => {
                it("SHOULD display incremented count", () => {
                        // ...
                });
            });
        
            describe("WHEN a user clicks increase count button multiple times", () => {
                it("SHOULD display incremented count", () => {
                        // ...
                });
            });
        });

        describe("GIVEN an initial count", () => {
            describe("WHEN a user clicks increase count button", () => {
                it("SHOULD display incremented count", () => {
                        // ...
                });
            });
        
            describe("WHEN a user clicks increase count button multiple times", () => {
                it("SHOULD display incremented count", () => {
                        // ...
                });
            });
        });

    });
});`}</CodeBlock>
            </section>
            <section>
                <H2>Don&apos;t be afraid to stub child components</H2>
                <Quote
                    source="Martin Fowler"
                    cite="Mocks arent Stubs"
                    citeLink="https://martinfowler.com/articles/mocksArentStubs.html"
                >
                    Stubs provide canned answers to calls made during the test, usually not responding at all to
                    anything outside what&apos;s programmed in for the test. Stubs may also record information about
                    calls, such as an email gateway stub that remembers the messages it &lsquo;sent&rsquo;, or maybe
                    only how many messages it &lsquo;sent&rsquo;.
                </Quote>
                <P>
                    Stubs are described as Mocks in Jest. See this article{' '}
                    <A
                        href="https://ericdcobb.medium.com/advanced-react-component-mocks-with-jest-and-react-testing-library-f1ae8838400b"
                        target="_blank"
                    >
                        Advanced React Component Mocks with Jest and React Testing Library
                    </A>{' '}
                    by Eric Cobb for details about how to use jest to stub components.
                </P>
                <P>These are unit tests and not integration tests. Stubbing out complex components can:</P>
                <UL>
                    <LI>Reduce the amount of effort to write a test</LI>
                    <LI>Increases the speed of snapshot testing</LI>
                    <LI>
                        Allow you to stub browser behaviours. Not all features of the browser of are emulated in{' '}
                        <A href="https://github.com/jsdom/jsdom" target="_blank">
                            jsdom
                        </A>
                        , and in these scenarios it makes more sense to mock the child component or browser behaviour.
                    </LI>
                </UL>
                <P>
                    For example what if our counter example had a tooltip component within it. Usually tooltip
                    components contain a lot of code and logic for figuring out where to position themselves on the
                    page. Within our counter test, we don&apos;t care if the tooltip works – there should already be
                    coverage in for this in our tooltip tests. In that case why let this component get in the way the
                    counter tests or slow us down?{' '}
                </P>
                <CodeBlock>{`// Counter.jsx

import { Tooltip } from "./tooltip";

const Counter = ({ initialCount, steps }) => {
	const [count, setCount] = useState(initialCount);
	const increment = () => setCount((count) => count + steps);

	return (<>
		<input name="counter" value={count} />
		<button onClick={increment}>Increment</button>
		<Tooltip>increments in steps of {steps}</Tooltip>
	</>);
};

// Counter.spec.jsx

jest.mock("./tooltip", () => {
	Tooltip: ({ children }) => <>{children}</>;
});`}</CodeBlock>
            </section>
            <section>
                <H2>Don&apos;t re-test functionality of child components</H2>
                <P>
                    Referring back to our previous counter component example, we avoid testing that the tooltip works in
                    the context of the counter component. We expect that the tooltip already has coverage in its own
                    tests, and it usage within the counter component is only considered plumbing or configuration, which
                    can just be validated by a developer, or in a code review.
                </P>
                <P>e.g. We do not test the following:</P>
                <CodeBlock>{`describe("<Counter />", () => {
		describe("behaviours", () => {
			describe("WHEN user mouseovers tooltip", () => {
				// AVOID TESTING THIS!
				it("SHOULD display tooltip text", () => {
        });
      });
		});
});`}</CodeBlock>
            </section>
            <section>
                <H2>Use a single expect per test</H2>
                <UL>
                    <LI>It&apos;s easier to debug failing tests</LI>
                    <LI>The test case is easier to read and understand what it is testing for</LI>
                </UL>
                <CodeBlock>{`describe("<Counter />", () => {
	describe("behaviours", () => {
        // AVOID THIS
		describe("WHEN user clicks increment", () => {
            it("SHOULD display incremented value for each click by defined steps", () => {
                render(<Counter steps={5} intialCount={0}/>);
                const incrementButton = screen.getByRole('button', { name: 'increment'});
                userEvent.click(incrementButton);
                const counter = screen.getByRole('textarea', { name: 'counter'})

                expect(counter.value).toBe(5);

                userEvent.click(incrementButton);
                expect(counter.value).toBe(10);

                            userEvent.click(incrementButton);
                expect(counter.value).toBe(15);
            });
        
        });

        // PREFER THIS
        describe("WHEN user clicks increment", () => {
            it("SHOULD display incremented value by defined steps", () => {
                render(<Counter steps={5} intialCount={0}/>);
                const incrementButton = screen.getByRole('button', { name: 'increment'});
                userEvent.click(incrementButton);
                const counter = screen.getByRole('textarea', { name: 'counter'})

                expect(counter.value).toBe(5);
            });
        });

        describe("WHEN user clicks increment multiple times", () => {
            it("SHOULD display incremented value by defined steps times clicks", () => {
                render(<Counter steps={5} intialCount={0}/>);
                const incrementButton = screen.getByRole('button', { name: 'increment'});
                userEvent.click(incrementButton);
                const counter = screen.getByRole('textarea', { name: 'counter'})
                userEvent.click(incrementButton);
                userEvent.click(incrementButton);
                userEvent.click(incrementButton);

                expect(counter.value).toBe(15);
            });
        });
    });
});`}</CodeBlock>
            </section>
            <section>
                <H2>Accept unit testing UI components can be difficult</H2>
                <P>
                    The{' '}
                    <A href="https://testing-library.com/docs/react-testing-library/intro/" target="_blank">
                        react-test-library
                    </A>{' '}
                    is limited by the functionality provided by{' '}
                    <A href="https://github.com/jsdom/jsdom" target="_blank">
                        js-dom
                    </A>{' '}
                    where not all all browser APIs are emulated, making it hard to test. Things usually difficult to
                    test are:
                </P>
                <UL>
                    <LI>
                        User scrolling within areas of the page. e.g. A common example of this is browser scrolling, for
                        example, testing that data is loaded when a user scrolls past a threshold.
                    </LI>
                </UL>
                <P>When writing a particular test becomes too difficult, we should consider the following:</P>
                <UL>
                    <LI>
                        You may be testing for the wrong thing. e.g. Are you testing child components like in the
                        tooltip example above?
                    </LI>
                    <LI>
                        Your component may be doing too much e.g. Is your component handling the retrieving of data from
                        an API, rendering a list and calculating the printing out of pagination? If your component is
                        doing more than 2-3 things you should consider splitting your component out into smaller
                        components or hooks.
                    </LI>
                    <LI>
                        Is there another way you could test this? Could I write a simpler test?
                        <UL>
                            <LI>
                                What would it mean if you didn&apos;t have this test and there was an error in this part
                                of the code?
                            </LI>
                            <LI>Is there another way you could test this? e.g Could I write a simpler.</LI>
                            <LI>
                                Is there another way you could test this? Could I write a simpler test?
                                <CodeBlock>{`describe("WHEN user scrolls to bottom of page", () => {
	// TODO: Figure out how to test this
	it.skip("SHOULD load more results") 
});`}</CodeBlock>
                            </LI>
                        </UL>
                    </LI>
                </UL>
            </section>
            <section>
                <H2>
                    Try use <InlineCode>getByRole</InlineCode>
                </H2>
                <P>
                    If you familiarise yourself with the testing libraries documentation on{' '}
                    <A href="https://testing-library.com/docs/queries/about/#priority" target="_blank">
                        priority of queries
                    </A>{' '}
                    you will notice that the first query suggested to utilise is <InlineCode>getByRole</InlineCode>.{' '}
                </P>
                <P>
                    For the majority of user behaviours, there is a way to use <InlineCode>getByRole</InlineCode>. to
                    find the element to interact with. The ability to query an element using{' '}
                    <InlineCode>getByRole</InlineCode>. means it will very likely be accessible and visible to screen
                    readers.{' '}
                </P>
                <P>
                    I recommend reviewing the [MDN docs for ARIA
                    Roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles) to figure out the best
                    way to add the correct roles to your interactive elements so that
                    <InlineCode>getByRole</InlineCode>. can be used.
                </P>
                <P>
                    For example for a <InlineCode>button</InlineCode> element you can use the attribute{' '}
                    <InlineCode>{`aria-pressed="true"`}</InlineCode> to represent a button is active or inactive.
                </P>
                <P>
                    I will use the example of a <InlineCode>ToggleButton</InlineCode> that can either be on or off to
                    show how we can now test a button&apos;s active state using <InlineCode>getByRole</InlineCode>.{' '}
                </P>
                <CodeBlock>{`// ToggleButton.js
const ToggleButton = ({intialActive}) => {
    const [isActive, setActive] = useState(intialActive)
    return (<button aria-pressed={isActive}>{ isActive? 'On': 'Off' }</button>
}

OnOffSwitch.defaultProps = {
    intialActive; false
}

// ToggleButton.spec.js
describe("<ToggleButton />", () => {
	describe("behaviours", () => {
     describe("GIVEN button is toggled off", () => {
        describe("WHEN user clicks toggle button", () => {
            it("SHOULD set button state inactive", () => {
                render(<ToggleBtn />)
                const toggle = screen.getByRole('button', { name: /off/i, pressed: false });
                userEvent.click(toggle)
                const activeToggle = screen.getByRole('button', { name: /on/i, pressed: true});

                expect(activeToggle).toBeInTheDocument();
            });
        });
     });
  });
});`}</CodeBlock>
            </section>
            <section>
                <H2>Isolate complex component logic into a hooks and helper functions and test separately</H2>
                <P>
                    In the counter component example, if we wanted to add a feature that allows users to provide their
                    own value using keyboard input, this would require more logic to be added into our component.
                </P>
                <P>
                    Adding more logic will increase the amount of tests and responsibilities for that component. By
                    refactoring some of the logic into a <InlineCode>useCounter</InlineCode> hook, we can split out the
                    responsibility and make things easier to test.
                </P>
                <P>
                    The refactored counter component and <InlineCode>useCounter</InlineCode> hook
                </P>
                <CodeBlock>{`// useCounter.js
export const useCounter = (initialCount, steps) => {

	const [count, setCount] = useState(initialCount);
	
	const increment = () => {
		setCount(({count }) => count + steps);
	}

	return { count, increment, setCount  }
}

// Counter.js
export const Counter = ({ initialCount, steps }) => {

	const { count, increment, setCount } =  useCounter(initialCount, steps );

	return (<>
		<input name="counter" value={count} onChange={(e) => setCount(e.target.value)} />
		<button onClick={increment}>Increment</button>
		<Tooltip>increments in steps of {steps}</Tooltip>
	</>);
};`}</CodeBlock>
                <P>The updated tests</P>
                <CodeBlock>{`// useCounter.spec.js
describe("useCounter", () => {
    describe("GIVEN intialCount AND steps", () => {
        it("SHOULD set count to intialCount", () => {
            const { result } = renderHook(() => useCounter({ intialCount: 5, steps: 10 }))

            expect(result.current.count).toBe(5);
        });

    describe("GIVEN increment()", () => {
	    it("SHOULD increase count by steps", () => {
	        const { result } = renderHook(() => useCounter({ intialCount: 5, steps: 10 }))
            act(() => {
            result.current.increment()
            })
            expect(result.current.count).toBe(15);
        });
    });

    describe("GIVEN setCount() with new value", () =>{
        it("SHOULD update count value", () => {
            const { result } = renderHook(() => useCounter({ intialCount: 5, steps: 10 }))
            act(() => {
            result.current.setCount(20)
            })
            expect(result.current.count).toBe(20);
        });
	});
});

// Counter.spec.js
describe("<Counter />", () => {

    describe("render" => () => {
        it("SHOULD render", () => {
            const { asFragment } =  render(<Counter />);

            expect(asFragment()).toMatchSnapshot();
        });
    });
});`}</CodeBlock>
            </section>
            <section>
                <H2>Conclusion</H2>
                <P>
                    After following these guidelines we went from having a haphazard approach to writing and structuring
                    UI tests, to having a clear and consistent method. There are many different ways to write,
                    structure, and organise tests, and this is by no means the best or only approach, but one that
                    worked for us.
                </P>
                <P>
                    If you want to improve testing in your codebase you should consider agreeing on a set of guidelines
                    that suits your team.{' '}
                </P>
            </section>
        </>
    );
};
