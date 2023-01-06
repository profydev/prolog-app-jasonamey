import React from "react";
import { Meta, Story } from "@storybook/react";
import {
  Button,
  ButtonProps,
  ButtonSize,
  ButtonColor,
  IconPosition,
} from "./button";

const meta: Meta = {
  title: "UI/Button",
  component: Button,
};

export default meta;

const Template: Story<ButtonProps> = ({
  size = ButtonSize.small,
  color = ButtonColor.primary,
  position = IconPosition.none,
  children,
  ...buttonProps
}: ButtonProps) => (
  <Button {...buttonProps} size={size} color={color} position={position}>
    {children}
  </Button>
);

export const Default = Template.bind({});

Default.args = {
  children: "Button CTA",
  disabled: false,
  position: IconPosition.none,
};
