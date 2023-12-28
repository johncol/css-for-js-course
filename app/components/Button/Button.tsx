import React from "react";
import styled, { css } from "styled-components";

import { COLORS } from "./constants";

type NativeButtonProps = React.ComponentPropsWithoutRef<"button">;

type ButtonVariant = "fill" | "outline" | "ghost";
type ButtonSize = "small" | "medium" | "large";

type ButtonOptions = {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type ButtonProps = NativeButtonProps & ButtonOptions;

export const Button: React.FC<ButtonProps> = ({
  variant = "fill",
  size = "medium",
  ...props
}) => {
  return <StyledButton {...props} variant={variant} size={size} />;
};

const BaseStyledButton = styled.button<ButtonOptions>`
  cursor: pointer;
  border-radius: 4px;
  font-family: Roboto, sans-serif;
  font-weight: 500;
  line-height: 1.17;
  letter-spacing: -2%;
  text-transform: uppercase;
`;

const VariantStyledButton = styled(BaseStyledButton)<ButtonOptions>`
  border: 2px solid transparent;
  outline: 2px solid transparent;
  outline-offset: 2px;

  ${({ variant }) => {
    switch (variant) {
      case "fill":
        return css`
          color: ${COLORS.white};
          background-color: ${COLORS.primary};
          border-color: ${COLORS.primary};

          &:hover {
            background-color: ${COLORS.primaryLight};
            border-color: ${COLORS.primaryLight};
          }

          &:focus {
            background-color: ${COLORS.primary};
            border-color: ${COLORS.primary};
            outline-color: ${COLORS.primary};
          }
        `;
      case "outline":
        return css`
          color: ${COLORS.primary};
          background-color: ${COLORS.white};
          border-color: ${COLORS.primary};

          &:hover {
            background-color: ${COLORS.offwhite};
          }

          &:focus {
            background-color: ${COLORS.white};
            border-color: ${COLORS.primary};
            outline-color: ${COLORS.primary};
          }
        `;
      case "ghost":
        return css`
          color: ${COLORS.gray};
          background-color: transparent;

          &:hover {
            color: ${COLORS.black};
            background-color: ${COLORS.transparentGray15};
          }

          &:focus {
            background-color: transparent;
            border-color: ${COLORS.transparentGray75};
          }
        `;
    }
  }}
`;

const SizeStyledButton = styled(VariantStyledButton)<ButtonOptions>`
  ${({ size }) => {
    switch (size) {
      case "small":
        return css`
          font-size: 16px;
          padding: 8px 16px;
        `;
      case "medium":
        return css`
          font-size: 18px;
          padding: 16px 24px;
        `;
      case "large":
        return css`
          padding: 20px 36px;
          font-size: 21px;
        `;
    }
  }}
`;

const StyledButton = styled(SizeStyledButton)<ButtonOptions>``;
