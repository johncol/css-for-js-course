"use client";

import { GlobalStyles } from "./GlobalStyles";
import { Quote } from "./Quote";

const Home = () => {
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
      </main>

      <GlobalStyles />
    </>
  );
};

export default Home;
