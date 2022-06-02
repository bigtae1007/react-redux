import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Header from "../../components/Header";
import { __getRequest } from "../../redux/modules/todo";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";

export default function TodoHome() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    dispatch(__getRequest());
  }, []);
  return (
    <>
      <Header name={"TODO _ LIST"} color={"var(--blue)"} />
      <WrapDiv>
        <TodoAdd />
        <TodoList />
      </WrapDiv>
    </>
  );
}

const WrapDiv = styled.div`
  border: 1px solid var(--black);
  border-radius: 10px;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.5);
  width: 500px;
  height: 600px;
  margin: 0 auto;
`;
