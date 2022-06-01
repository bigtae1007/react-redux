import React from "react";
import styled from "styled-components";
import flex from "../../lib/flex";

export default function TodoAdd() {
  return (
    <>
      <WrapDiv>
        <AddTodoInput type="text" />
        <AddBtn>추가 하기</AddBtn>
      </WrapDiv>
    </>
  );
}

const WrapDiv = styled.div`
  border-bottom: 2px solid var(--black);
  height: 80px;
  padding: 20px;
  ${flex({ gap: 0, jutify: "center" })}
`;
const AddTodoInput = styled.input`
  border-radius: 5px;
  border: 1px solid var(--blue);
  width: 60%;
  margin-right: 40px;
  height: 30px;
  :focus {
    outline: none;
    border: 2px solid var(--blue);
  }
`;

const AddBtn = styled.button`
  border-radius: 5px;
  background-color: var(--blue);
  color: var(--white);
  border: none;
  height: 30px;
  width: 20%;
`;
