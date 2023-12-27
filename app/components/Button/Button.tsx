import React from "react";
import styled from "styled-components";

import { COLORS } from "./constants";

type ButtonVariant = "fill" | "outline" | "ghost";
type ButtonSize = "small" | "medium" | "large";

type ButtonProps = React.PropsWithChildren<{
  variant: ButtonVariant;
  size: ButtonSize;
}>;

export const Button: React.FC<ButtonProps> = (props) => {
  return "TODO";
};
