import React, { FunctionComponent, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from '../../Header/Header';
import { HowOurTeamWritesReactTests } from './articles/HowOurTeamWritesReactTests';

const Wrapper = styled.article`
    padding: 2rem 25%;
    background-color: #f7fff6;
    /* padding: 2rem 4rem; */
    border-radius: 1rem;
`;

interface CommentWallProps {
    pageIdentifier: string;
}

const CommentWall: FunctionComponent<CommentWallProps> = ({ pageIdentifier }) => {
    useEffect(() => {
        // cleanup
        document.querySelectorAll('link[href*=disqus]').forEach((link) => link.remove());
        // @ts-expect-error - this object will exist on window
        window.disqus_config = function () {
            // @ts-expect-error - this object will exist on window
            this.page.url = window.location.href;
            // @ts-expect-error - this object will exist on window
            this.page.identifier = pageIdentifier;
        };
        const d = document,
            s = d.createElement('script');
        s.src = 'https://robert-prib-blog.disqus.com/embed.js';
        s.setAttribute('data-timestamp', (+new Date()).toString());
        (d.head || d.body).appendChild(s);
        return () => {
            s.remove();
        };
    }, [pageIdentifier]);
    return (
        <>
            <div id="disqus_thread"></div>
            <noscript>
                Please enable JavaScript to view the{' '}
                <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a>
            </noscript>
        </>
    );
};

export const Article: FunctionComponent = () => {
    const { article } = useParams<{ article: string }>();
    return (
        <>
            <Header />
            <Wrapper>
                <HowOurTeamWritesReactTests />
                <CommentWall pageIdentifier={article} />
            </Wrapper>
        </>
    );
};
