import React from "react";
import styled from "styled-components";
import flex from "../../lib/flex";
import TodoCard from "./TodoCard";

export default function TodoList() {
  return (
    <>
      <WrapList>
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </WrapList>
    </>
  );
}
const WrapList = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 80%;
  margin: 20px auto;
  overflow-y: auto;
`;
