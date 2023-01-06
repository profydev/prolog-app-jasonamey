import React, { useEffect, useRef, useState } from "react";
import { color, textFont, space } from "@styles/theme";
import styled, { css } from "styled-components";

enum CheckboxStates {
  Checked = "Checked",
  Empty = "Empty",
  Indeterminate = "Indeterminate",
}

export enum CheckboxSize {
  sm = "sm",
  md = "md",
}

export type CheckboxProps = {
  label: string;
  checkboxSize: CheckboxSize;
  disabled?: boolean;
  indeterminate?: boolean;
  checked?: boolean;
};

type InputProps = {
  label: string;
  checkboxSize: CheckboxSize;
  disabled: boolean;
  value: CheckboxStates;
  indeterminate?: boolean;
  checked?: boolean;
  handleChange: () => void;
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;
const Label = styled.label<{ checkboxSize: CheckboxSize; disabled: boolean }>`
  display: flex;
  align-items: center;
  ${(props) =>
    props.checkboxSize === CheckboxSize.sm
      ? textFont("sm", "medium")
      : textFont("md", "medium")};
  color: ${color("gray", 700)};
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
const colorStyles = css`
  background-color: ${color("primary", 50)};
  border: 1px solid ${color("primary", 600)};
`;
const iconStyles = (filename: string) => {
  return css`
    background-repeat: no-repeat;
    background-position: center;
    background-image: url("icons/${filename}");
  `;
};
const CheckInput = styled.input<{
  checkboxSize: CheckboxSize;
  disabled: boolean;
  indeterminate: boolean;
}>`
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
  font: inherit;
  border: 1px solid ${color("gray", 300)};
  &:checked {
    ${colorStyles}
  }
  &:indeterminate {
    ${colorStyles}
  }
  &:focus {
    box-shadow: 0px 0px 0px 4px ${color("primary", 50)};
  }
  &:disabled {
    background-color: ${color("gray", 100)};
    border: 1px solid ${color("gray", 200)};
  }
  ${(props) => {
    switch (props.checkboxSize) {
      case CheckboxSize.sm:
        return css`
          border-radius: 4px;
          width: ${space(4)};
          height: ${space(4)};
          margin-right: ${space(2)};
          &:checked {
            ${iconStyles("check-sm.svg")}
            &:disabled {
              ${iconStyles("disabled-check-sm.svg")}
            }
          }
          &:indeterminate {
            ${iconStyles("partial-check-sm.svg")}
            &:disabled {
              ${iconStyles("disabled-indeterminate-sm.svg")}
            }
          }
        `;
      case CheckboxSize.md:
        return css`
          border-radius: 6px;
          width: 1.15rem;
          height: 1.15rem;
          margin-right: 0.75rem;
          &:checked {
            ${iconStyles("check-md.svg")}
            &:disabled {
              ${iconStyles("disabled-check-md.svg")}
            }
          }
          &:indeterminate {
            ${iconStyles("partial-check-md.svg")}
            &:disabled {
              ${iconStyles("disabled-indeterminate-md.svg")}
            }
          }
        `;
    }
  }}
`;

export function Checkbox(props: CheckboxProps) {
  const {
    checkboxSize,
    label,
    disabled = false,
    checked = false,
    indeterminate = false,
  } = props;
  const [checkedState, setCheckedState] = useState<CheckboxStates>(
    CheckboxStates.Empty
  );

  const handleChange = () => {
    let updatedCheckedState = CheckboxStates.Empty;
    if (checkedState === CheckboxStates.Checked) {
      updatedCheckedState = CheckboxStates.Empty;
    } else if (checkedState === CheckboxStates.Empty) {
      updatedCheckedState = CheckboxStates.Indeterminate;
    } else if (checkedState === CheckboxStates.Indeterminate) {
      updatedCheckedState = CheckboxStates.Checked;
    }
    setCheckedState(updatedCheckedState);
  };

  return (
    <>
      <Container>
        <Input
          checkboxSize={checkboxSize}
          disabled={disabled}
          label={label}
          handleChange={handleChange}
          value={checkedState}
          checked={checked}
          indeterminate={indeterminate}
        />
      </Container>
      <p>Is checked? {checkedState}</p>
    </>
  );
}

function Input({
  checkboxSize,
  disabled,
  label,
  value,
  handleChange,
  checked,
  indeterminate = false,
}: InputProps) {
  const checkboxRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (checkboxRef.current) {
      if (value === CheckboxStates.Checked || checked) {
        checkboxRef.current.checked = true;
        checkboxRef.current.indeterminate = false;
      } else if (value === CheckboxStates.Indeterminate || indeterminate) {
        checkboxRef.current.checked = false;
        checkboxRef.current.indeterminate = true;
      } else if (value === CheckboxStates.Empty) {
        checkboxRef.current.checked = false;
        checkboxRef.current.indeterminate = false;
      }
    }
  }, [value, checkboxRef, checked, indeterminate]);
  return (
    <Label checkboxSize={checkboxSize} disabled={disabled}>
      <CheckInput
        checkboxSize={checkboxSize}
        ref={checkboxRef}
        type="checkbox"
        onChange={handleChange}
        disabled={disabled}
        checked={checked}
        indeterminate={indeterminate}
      />
      {label}
    </Label>
  );
}
