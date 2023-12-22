"use client";

import { GlobalStyles } from "./GlobalStyles";
import { ButtonExample } from "./components/ButtonExample";
import { Quote } from "./components/Quote";

const App = () => {
  return (
    <>
      <main>
        <Quote
          by="Academy Professor in the book If We Were Villains by M. L. Rio"
          source="https://www.cloudlakeliterary.ca/blogposts/book-review-if-we-were-villains-by-m-l-rio"
        >
          If you have not made any enemies in life, you&apos;ve been living too
          safely
        </Quote>
        <hr />
        <ButtonExample color="orange" />
      </main>

      <GlobalStyles />
    </>
  );
};

export default App;
