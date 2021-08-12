import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';
import { ReactComponent as CalendarDayIcon } from '../../../assets/svgs/solid/calendar-day.svg';
import { ReactComponent as StopWatchIcon } from '../../../assets/svgs/solid/stopwatch.svg';
import { A, ArticleMeta, H1, H2, LI, P, Quote, Strong, SvgIcon, UL } from '../../../shared/typography/typography';

export const HeresWhatHappenedAfter: FunctionComponent = () => {
    return (
        <>
            <Helmet>
                <title>Here&apos;s what happened after publishing my first article | Robert Prib | Blog </title>
                <meta
                    name="description"
                    content="What happened after sharing my content didn't follow the script I had envisioned. The results
                    are not surprising. This post talks more about what happened."
                />
                <meta
                    name="og:title"
                    content="Here's what happened after publishing my first article | Robert Prib | Blog "
                />
                <meta
                    name="og:description"
                    content="What happened after sharing my content didn't follow the script I had envisioned. The results
                    are not surprising. This post talks more about what happened."
                />
                <meta name="og:url" content="https://whassup.github.io/blog/article/how-our-team-writes-tests" />
                <meta name="og:image" content="https://whassup.github.io/blog/article/how-our-team-writes-tests" />
            </Helmet>
            <H1>Here&apos;s what happened after publishing my first article</H1>
            <ArticleMeta>
                <time>
                    <SvgIcon>
                        <CalendarDayIcon />
                    </SvgIcon>{' '}
                    12 Agust 2021
                </time>{' '}
                <span>
                    <SvgIcon>
                        <StopWatchIcon />
                    </SvgIcon>{' '}
                    4 minute read
                </span>
            </ArticleMeta>

            <section>
                <P>
                    This year I published my first article{' '}
                    <A href="https://whassup.github.io/blog/article/how-our-team-writes-tests/">
                        &quot;How our team writes React tests and other stuff too&quot;
                    </A>
                    . What happened after sharing my content didn&apos;t follow the script I had envisioned. The results
                    are not surprising; here is what happened.
                </P>

                <UL>
                    <LI>
                        <A href="#viewership">Viewership was lower than I expected</A>
                    </LI>
                    <LI>
                        <A href="#no-comments">No one commented</A>
                    </LI>
                    <LI>
                        <A href="#reddit">Reddit removed my posts</A>
                    </LI>
                    <LI>
                        <A href="#sharing">Sharing this content was useful for myself</A>
                    </LI>
                    <LI>
                        <A href="#insights">I gained valuable insights</A>
                    </LI>
                    <LI>
                        <A href="#more-to-learn">
                            There is a great deal more for me to learn about writing & publishing online
                        </A>
                    </LI>
                </UL>
            </section>
            <section>
                <H2 id="viewership">Viewership was lower than I expected</H2>
                <P>
                    I was very optimistic about the amount of engagement my article would get. I published on my own
                    personal blog and then shared it on several networks over the course of a month. Networks I shared
                    my article on were: work Slack, LinkedIn, Medium, Dev.to, Hacker News and Reddit.
                </P>
                <Quote citeContent="Sharing my article with my colleagues at work via Slack." source="Slack">
                    <img
                        src="/blog/slack-post-publishing-article.png"
                        alt="Sharing my article with my colleagues at work."
                        width="100%"
                    />
                </Quote>
                <P>
                    With each network I shared to I was hoping that I would slowly get more and more people viewing my
                    content. All up my article received about 150~ unique views and out of those views probably less
                    than half read it.
                </P>
                <P>
                    {' '}
                    The majority those views came from{' '}
                    <A href="http://dev.to" target="_blank">
                        Dev.to
                    </A>
                    , my personal blog and LinkedIn, with little to no views from Hacker News and Reddit.
                </P>
                <Quote citeContent="The amount of likes and views I received" source="Dev.to">
                    <img
                        src="/blog/slack-post-publishing-article.png"
                        alt="The amount of likes and views I received from Dev.to"
                        width="100%"
                    />
                </Quote>
                <br />
            </section>
            <section>
                <H2 id="no-comments">No one commented</H2>
                <P>
                    It was crushing not getting the viewership that I had anticipated; it was devastating to not to
                    receive a single comment or question about the article. My main hope was this content would start a
                    conversation around it&apos;s subject matter topic and not doing so felt like failure.
                </P>
                <P>
                    My partner Emily&apos;s advice on no one commenting was to relay some expertise on the matter
                    provided from one of her favorite radio programs, &quote;The Taylor Strecker Show&quote;.
                    Paraphrasing Emily whom was paraphrasing Taylor, &quote;most people who consume your content are in
                    the silent majority and move on. The ones that have opposing opinions are generally the ones that
                    comment&quote;.
                </P>
                <P>
                    The reality is I read a lot of valuable content online and I rarely comment on it and my guess most
                    people are like me too in this regard. Whether people comment on a article is not important and
                    neither does it represent the content as being good or bad.
                </P>
            </section>
            <section>
                <H2 id="reddit">Reddit removed my posts</H2>
                <P>
                    Reddit felt like it should of been the easiest place to share content to a large audience. I created
                    myself a reddit account and then published to a few relevant communities such as r/react r/Frontend
                    and r/JavaScript. To my surprise all my posts where taken down by moderator bots being flagged as
                    spam.
                </P>
                <P>
                    It turns out my account is too new to share content. To post on most reddit communities you need
                    first build karma points in that community by commenting and voting on other posts first.
                </P>
                <Quote citeContent="My removed post" source="Reddit">
                    <img src="/blog/reddit-removed-post.png" alt="My removed post on Reddit" width="100%" />
                </Quote>
            </section>
            <section>
                <H2 id="sharing">Sharing this content was useful for myself</H2>
                <P>
                    My article wasn&apos;t viewed by the masses and didn&apos;t generate any interesting debate however
                    I found other usefulness in sharing this content. Writing this content was useful for myself to
                    define what I understand about the subject matter and sharing it proofed to be a useful reference
                    material for myself when bringing new people into my team.
                </P>
            </section>
            <section>
                <H2 id="insights">Sharing this content was useful for myself</H2>
                <P>
                    The real value generated from publishing my first article was the insights I garnered from the
                    experience.
                </P>
                <P>
                    <Strong>Insight 1 -</Strong> I enjoy writing content and I should write and share more.
                </P>
                <P>
                    <Strong>Insight 2 -</Strong> Producing content is my goal; views and engagement are merely side
                    effects.
                </P>
                <P>
                    <Strong>Insight 3 -</Strong> Each time I publish it will get easier as I discover more about how to
                    publish to various networks and their limitations.
                </P>{' '}
            </section>
            <section>
                <H2 id="more-to-learn">
                    There is a great deal more for me to learn about writing & publishing online{' '}
                </H2>
                <P>For anyone reading this article I would love to know;</P>
                <UL>
                    <LI>Where are you sharing your content?</LI>
                    <LI>How are you marketing your content?</LI>
                    <LI>How important is it to include a thumbnail with your article?</LI>
                    <LI>What have your experiences been like with sharing online?</LI>
                </UL>
            </section>
            <section>
                <H2>Conclusion</H2>
                <Quote citeContent="Bird by Bird: Instructions on Writing and Life" source="Anne Lamott">
                    &quot;You are going to have to give and give and give, or there&apos;s no reason for you to be
                    writing. You have to give from the deepest part of yourself, and you are going to have to go on
                    giving, and the giving is going to have to be its own reward. There is no cosmic importance to your
                    getting something published, but there is in learning to be a giver.&quot;
                </Quote>
                <P>
                    My first article gave me experience with the writing and sharing content online. The views and
                    engagement are not important they are just outcomes that can happen through the process of sharing
                    content. Taking inspiration from Anne Lamott&apos;s comment on getting something published as writer
                    I&apos;m going to focus on the act of writing and sharing my content whether people are interested
                    in it on or not.
                </P>
            </section>
        </>
    );
};
