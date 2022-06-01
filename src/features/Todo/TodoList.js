import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import flex from "../../lib/flex";
import TodoCard from "./TodoCard";

export default function TodoList() {
  const { todo, loading, error } = useSelector((state) => state.todos);
  console.log(todo);
  return (
    <>
      <WrapList>
        {todo.map((v, l) => {
          return (
            <TodoCard
              key={v.id}
              complete={v.complete}
              text={v.text}
              id={v.id}
              index={l}
            />
          );
        })}
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
