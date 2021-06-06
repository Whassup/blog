import React, { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from '../../Header/Header';
import { HowOurTeamWritesReactTests } from './articles/HowOurTeamWritesReactTests';

const Wrapper = styled.article`
    padding: 0 25%;
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
