import React from "react";
import { space, color, textFont } from "@styles/theme";
import styled from "styled-components";

type ErrorMessageProps = {
  refetch: () => void;
};

console.log(textFont("xs", "regular"));

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${color("error", 600)};
  background-color: ${color("error", 25)};
  border: 1px solid ${color("error", 300)};
  padding: ${space(3)};
  border-radius: ${space(2)};
  font-size: 0.875rem;
  font-weight: bold;
`;
const MessageContainer = styled.div`
  display: flex;
  align-items: center;
`;
const MessageIcon = styled.img`
  margin-right: ${space(3)};
`;
const Message = styled.span``;
const TryAgainContainer = styled.div`
  display: flex;
  align-items: center;
`;
const RightArrow = styled.img`
  margin-left: ${space(3)};
  cursor: pointer;
`;
export function ErrorMessage({ refetch }: ErrorMessageProps) {
  return (
    <Container>
      <MessageContainer>
        <MessageIcon src="/icons/error-icon.svg" />
        <Message>There was a problem loading the project data.</Message>
      </MessageContainer>
      <TryAgainContainer>
        <Message>Try Again</Message>
        <RightArrow
          src="/icons/arrow-right.svg"
          onClick={() => refetch()}
        ></RightArrow>
      </TryAgainContainer>
    </Container>
  );
}
