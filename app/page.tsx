"use client";

import { GlobalStyles } from "./GlobalStyles";
import { BreadcrumbsExample } from "./components/Breadcrumbs";
import { ButtonExample } from "./components/ButtonExample";
import { QuoteExample } from "./components/Quote";

const App = () => {
  return (
    <>
      <main>
        <QuoteExample />

        <hr />
        <ButtonExample color="orange" />

        <hr />
        <BreadcrumbsExample />
      </main>

      <GlobalStyles />
    </>
  );
};

export default App;
