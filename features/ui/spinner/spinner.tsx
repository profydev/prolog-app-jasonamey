import React from "react";
import styled, { keyframes } from "styled-components";
import { space, color } from "@styles/theme";

const Container = styled.div`
  width: 100%;
  display: flex;
  padding-top: ${space(10)};
  justify-content: center;
  align-items: center;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerCircle = styled.div`
  border: ${space(4)} solid ${color("gray", 100)};
  border-top: ${space(4)} solid ${color("primary", 600)};
  border-radius: 50%;
  width: ${space(10)};
  height: ${space(10)};
  animation: ${rotate} 1.5s linear infinite;
`;

export function Spinner() {
  return (
    <Container data-testid="spinner">
      <SpinnerCircle />
    </Container>
  );
}
