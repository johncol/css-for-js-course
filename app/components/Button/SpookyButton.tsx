import styled from "styled-components";
import { Button } from "./Button";

export const SpookyButton = styled(Button)`
  border: none;
  font-family: Creepster, "Franklin Gothic Medium", "Arial Narrow", Arial,
    sans-serif;
  font-size: 40px;
  padding: 20px 30px;
  background-color: orange;
  color: black;
  letter-spacing: 1px;

  &:hover {
    background-color: black;
    color: orange;
  }

  &:focus {
    background-color: black;
    color: orange;
    outline: 4px solid orange;
    outline-offset: 4px;
  }
`;
