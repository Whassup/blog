import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';
import { ArticleList } from '../../ArticleList/ArticleList';
import { Header } from '../../Header/Header';

export const Home: FunctionComponent = () => {
    return (
        <>
            <Helmet>
                <title>Home | Robert Prib | Blog </title>
                <meta name="description" content="Personal blog of Robert Prib with articles on web development" />
                <meta name="og:title" content="Personal blog of Robert Prib" />
                <meta name="og:description" content="Articles on web development" />
                <meta name="og:url" content="https://whassup.github.io/blog/" />
            </Helmet>
            <Header />
            <ArticleList />
        </>
    );
};
