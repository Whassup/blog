import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Header } from '../../Header/Header';
import { mediaQuery } from '../../shared/mediaQuery';

const Wrapper = styled.article`
    background-color: #f7fff6;
    border-radius: 1rem;

    ${mediaQuery.desktop} {
        padding: 2rem 25%;
    }

    ${mediaQuery.tablet} {
        padding: 2rem 10%;
    }

    ${mediaQuery.mobile} {
        padding: 2rem 5%;
    }
`;

export const Contact: FunctionComponent = () => {
    return (
        <Wrapper>
            <Helmet>
                <title>Contact | Robert Prib | Blog </title>
                <meta name="description" content="Personal blog of Robert Prib with articles on web development" />
                <meta name="og:title" content="Contact | Robert Prib | Blog" />
                <meta name="og:description" content="Articles on web development" />
                <meta name="og:url" content="https://whassup.github.io/blog/contact" />
            </Helmet>
            <Header />
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdRfFhCTe403ldrqTt41Mj9tAOCMxVKSboV6JVYOimOcus7iQ/viewform?embedded=true"
                width="640"
                height="750"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
            >
                Loading…
            </iframe>
        </Wrapper>
    );
};
