"use client";

import styled from "styled-components";

type QuoteProps = React.PropsWithChildren<{
  by: string;
  source: string;
}>;

export const QuoteExample = () => (
  <Quote
    by="Academy Professor in the book If We Were Villains by M. L. Rio"
    source="https://www.cloudlakeliterary.ca/blogposts/book-review-if-we-were-villains-by-m-l-rio"
  >
    If you have not made any enemies in life, you&apos;ve been living too safely
  </Quote>
);

const Quote: React.FC<QuoteProps> = (props) => {
  return (
    <Figure>
      <Blockquote>{props.children}</Blockquote>
      <figcaption>
        <Cite>
          by{" "}
          <Link href={props.source} target="_blank" rel="noopener noreferrer">
            {props.by}
          </Link>
        </Cite>
      </figcaption>
    </Figure>
  );
};

const Figure = styled.figure`
  margin: 1em;
`;

const Blockquote = styled.blockquote`
  padding: 2em;
  border-radius: 5px;
  background-color: aliceblue;
  font-style: italic;
  font-size: 18px;

  &::before {
    content: open-quote;
  }

  &::after {
    content: close-quote;
  }
`;

const Cite = styled.cite`
  display: block;
  text-align: right;
  margin-top: 0.5em;
  font-style: normal;
  font-size: 14px;

  &::before {
    content: "—";
  }
`;

const Link = styled.a`
  text-decoration: underline;
`;
