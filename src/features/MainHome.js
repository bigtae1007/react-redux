import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Header from "../components/Header";
import MainCard from "./MainCard";

export default function MainHome() {
  const state = useSelector((state) => state);
  return (
    <>
      <Header name="나만의 저장소" color="var(--red)" />
      <WrapDiv>
        <MainCard name="나만의 단어장" list={state.memos.memo} link="memo" />
        <MainCard
          name="
        TODO _ List"
          list={state.todos.todo}
          link="todo"
        />
      </WrapDiv>
    </>
  );
}
const WrapDiv = styled.div`
  display: flex;
  width: 60%;
  margin: 0 auto;
  justify-content: space-around;
`;
