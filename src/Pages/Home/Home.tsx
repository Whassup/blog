import React, { FunctionComponent } from 'react';
import { ArticleList } from '../../ArticleList/ArticleList';
import { Header } from '../../Header/Header';

export const Home: FunctionComponent = () => {
    return (
        <>
            <Header />
            <ArticleList />
        </>
    );
};
