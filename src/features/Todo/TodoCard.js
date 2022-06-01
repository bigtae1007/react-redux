import React from "react";
import styled from "styled-components";

export default function TodoCard() {
  return (
    <TextDiv>
      <Text>
        이건 투두 이건 투두 이건 투두 이건 투두 이건 투두 이건 투두 이건 투두
        이건 투두 내요이 되겠죠?
      </Text>
      <Btn color="blue" text="white">
        완 료
      </Btn>
      <Btn>삭 제</Btn>
    </TextDiv>
  );
}
const TextDiv = styled.div`
  background-color: var(--grey);
  margin: 10px 40px;
  border-radius: 20px;
  border-bottom: 1px solid var(--black);
  width: 83%;
  min-height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Text = styled.p`
  width: 290px;
  padding: 10px;
`;

const Btn = styled.button`
  border: 1px solid var(--blue);
  width: 40px;
  height: 30px;
  border-radius: 10px;
  color: ${({ text }) => (text ? "#fff" : "var(--blue)")};
  background-color: ${({ color }) => (color ? "var(--blue)" : "var(--while)")};
`;
