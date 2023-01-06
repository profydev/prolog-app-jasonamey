import React from "react";
import { Meta, Story } from "@storybook/react";
import { Checkbox, CheckboxProps, CheckboxSize } from "./checkbox";

const meta: Meta = {
  title: "UI/CheckboxTwo",
  component: Checkbox,
};

export default meta;

const Template: Story<CheckboxProps> = ({
  checkboxSize,
  label,
  disabled = false,
  indeterminate,
  checked,
}: CheckboxProps) => (
  <Checkbox
    checkboxSize={checkboxSize}
    label={label}
    disabled={disabled}
    checked={checked}
    indeterminate={indeterminate}
  />
);

export const Default = Template.bind({});

Default.args = {
  label: "Label",
  checkboxSize: CheckboxSize.md,
  checked: false,
  indeterminate: false,
  disabled: false,
};
