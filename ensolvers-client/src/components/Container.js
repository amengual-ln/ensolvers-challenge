import styled from "styled-components"

const PageContainer = styled.div`
    padding: 2em;
    max-width: 1200px;
    margin: 0 auto;
`

export const Container = ({ children }) => <PageContainer>{children}</PageContainer>