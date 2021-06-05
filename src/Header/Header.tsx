import styled from "styled-components"

const Wrapper = styled.header`
    background: green;
`

export const Header = () => {
    return (
        <Wrapper>
            <h1>() =&gt; "rOBERT pRIB"</h1>
            <nav>
                <a>Home</a>
                <a>About me</a>
                <a>Contact</a>
            </nav>
        </Wrapper>
    )
}