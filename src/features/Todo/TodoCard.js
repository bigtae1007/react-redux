import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { __changeComplete, __deleteTodo } from "../../redux/modules/todo";

export default function TodoCard({ complete, text, id, index }) {
  const dispatch = useDispatch();
  // 완료 상태 변경하기
  const changeComplete = () => {
    dispatch(__changeComplete({ id, index, complete }));
  };
  // 삭제하기
  const deleteTodo = () => {
    dispatch(__deleteTodo({ id, index }));
  };
  return (
    <TextDiv complete={complete}>
      <Text>{text}</Text>
      <Btn
        color="blue"
        text="white"
        complete={complete}
        onClick={changeComplete}
      >
        {complete ? "취소" : "완료"}
      </Btn>
      <Btn onClick={deleteTodo}>삭 제</Btn>
    </TextDiv>
  );
}
const TextDiv = styled.div`
  background-color: ${({ complete }) => {
    return complete ? "var(--grey)" : "var(--white)";
  }};
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
  color: ${({ text, complete }) =>
    text ? (complete ? "var(--red)" : "var(--white)") : "var(--blue)"};
  background-color: ${({ color }) => (color ? "var(--blue)" : "var(--while)")};
`;
