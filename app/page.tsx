"use client";

import { GlobalStyles } from "./GlobalStyles";
import { BreadcrumbsExample } from "./components/Breadcrumbs";
import { ButtonTable } from "./components/Button/ButtonTable";
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

        <hr />
        <ButtonTable />
      </main>

      <GlobalStyles />
    </>
  );
};

export default App;
