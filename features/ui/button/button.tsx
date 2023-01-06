import { ReactNode, ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";
import { color, space, textFont } from "@styles/theme";

export enum ButtonColor {
  primary = "primary",
  secondary = "secondary",
  gray = "gray",
  empty = "empty",
  emptyGray = "emptyGray",
  error = "error",
}

export enum ButtonSize {
  small = "small",
  medium = "medium",
  large = "large",
  xlarge = "xlarge",
}

export enum IconPosition {
  leading = "leading",
  trailing = "trailing",
  only = "only",
  none = "none",
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color: ButtonColor;
  size: ButtonSize;
  position: IconPosition;
  iconSrc?: string;
};

const Container = styled.button<{
  color: ButtonColor;
  size: ButtonSize;
  disabled: boolean;
}>`
  cursor: pointer;
  // remove default button styles
  border: none;
  margin: 0;
  padding: 0;
  background: transparent;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: ${space(2)};
  letter-spacing: 0.6px;
  ${(props) => {
    switch (props.color) {
      case ButtonColor.primary:
        return css`
          background-color: ${color("primary", 600)};
          color: #ffffff;
          &:hover {
            background-color: ${color("primary", 700)};
          }
          &:focus {
            background-color: ${color("primary", 600)};
            box-shadow: 0 0 0 3px ${color("primary", 100)};
          }
          &:disabled {
            background-color: ${color("primary", 200)};
          }
        `;
      case ButtonColor.secondary:
        return css`
          background-color: ${color("primary", 50)};
          color: ${color("primary", 700)};
          &:hover {
            background-color: ${color("primary", 100)};
          }
          &:focus {
            background-color: ${color("primary", 50)};
            box-shadow: 0 0 0 3px ${color("primary", 100)};
          }
          &:disabled {
            background-color: ${color("primary", 25)};
            color: ${color("primary", 300)};
          }
        `;
      case ButtonColor.gray:
        return css`
          background-color: #ffffff;
          color: ${color("gray", 800)};
          box-shadow: inset 0 0 0 1px ${color("gray", 300)};
          &:hover {
            background-color: ${color("gray", 50)};
          }
          &:focus {
            box-shadow: inset 0 0 0 1px ${color("gray", 300)},
              0 0 0 3px ${color("gray", 100)};
          }
          &:disabled {
            box-shadow: inset 0 0 0 1px ${color("gray", 200)};
            color: ${color("gray", 200)};
          }
        `;
      case ButtonColor.empty:
        return css`
          background-color: transparent;
          color: ${color("primary", 700)};
          &:hover {
            background-color: ${color("primary", 100)};
          }
          &:focus {
            background-color: transparent;
          }
          &:disabled {
            color: ${color("gray", 300)};
          }
        `;
      case ButtonColor.emptyGray:
        return css`
          background-color: transparent;
          color: ${color("gray", 500)};
          &:hover {
            background-color: ${color("gray", 50)};
          }
          &:focus {
            background-color: transparent;
          }
          &:disabled {
            color: ${color("gray", 300)};
          }
        `;
      case ButtonColor.error:
        return css`
          background-color: ${color("error", 600)};
          color: #ffffff;
          &:hover {
            background-color: ${color("error", 700)};
          }
          &:focus {
            background-color: ${color("error", 600)};
            box-shadow: 0 0 0 3px ${color("error", 100)};
          }
          &:disabled {
            background-color: ${color("error", 200)};
          }
        `;
    }
  }}
  ${(props) => {
    switch (props.size) {
      case ButtonSize.small:
        return css`
          padding: ${space(2)} 0.85rem;
          ${textFont("sm", "regular")};
        `;
      case ButtonSize.medium:
        return css`
          padding: 0.6rem 0.9rem;
          ${textFont("sm", "regular")};
        `;
      case ButtonSize.large:
        return css`
          padding: 0.65rem 1.15rem;
          ${textFont("md", "regular")};
        `;
      case ButtonSize.xlarge:
        return css`
          padding: 0.75rem ${space(5)};
          ${textFont("md", "regular")};
        `;
    }
  }}
`;

const Icon = styled.img<{ position: IconPosition; size: ButtonSize }>`
  color: green;
  ${(props) => {
    switch (props.position) {
      case IconPosition.leading:
        return css`
          margin-right: 0.5em;
        `;
      case IconPosition.trailing:
        return css`
          margin-left: 0.5em;
        `;
    }
  }}
`;

export function Button(props: ButtonProps) {
  const { color, size, position, disabled = false, iconSrc, children } = props;
  return (
    <Container disabled={disabled} color={color} size={size}>
      {position === IconPosition.leading && (
        <>
          <Icon src={iconSrc} position={position} size={size} /> {children}
        </>
      )}
      {position === IconPosition.trailing && (
        <>
          {children}
          <Icon src={iconSrc} position={position} size={size} />{" "}
        </>
      )}
      {position === IconPosition.only && (
        <>
          <Icon src={iconSrc} position={position} size={size} />{" "}
        </>
      )}
      {position === IconPosition.none && children}
    </Container>
  );
}
