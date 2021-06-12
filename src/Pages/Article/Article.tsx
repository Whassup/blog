import React, { FunctionComponent } from 'react';
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

export const Article: FunctionComponent = () => {
    const { article } = useParams<{ article: string }>();
    return (
        <>
            <Header />
            <Wrapper>
                <HowOurTeamWritesReactTests />
            </Wrapper>
        </>
    );
};
