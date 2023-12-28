"use client";

import styled from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { BreadcrumbsExample } from "./components/Breadcrumbs";
import { ButtonTable } from "./components/Button/ButtonTable";
import { SpookyButton } from "./components/Button/SpookyButton";
import { ButtonExample } from "./components/ButtonExample";
import { QuoteExample } from "./components/Quote";

const App = () => {
  return (
    <>
      <Container>
        <QuoteExample />
        <ButtonExample color="orange" />
        <BreadcrumbsExample />
        <ButtonTable />
        <SpookyButton>Halloween is here!</SpookyButton>
      </Container>

      <GlobalStyles />
    </>
  );
};

const Container: React.FC<React.PropsWithChildren> = ({ children }) => {
  if (!children) return null;

  if (!Array.isArray(children)) {
    return <MainContainer>{children}</MainContainer>;
  }

  return (
    <MainContainer>
      {children.map((child) => (
        <section key={`child`}>{child}</section>
      ))}
    </MainContainer>
  );
};

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;

  > * {
    padding: 20px;
  }

  > :not(:first-child) {
    border-top: 2px dotted #333;
  }
`;

export default App;
