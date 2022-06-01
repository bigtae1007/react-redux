import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { keyframes } from "styled-components";
// 컴포넌트
import flex from "../../lib/flex";
import MemoCard from "./MemoCard";

export default function MemoCardList(props) {
  const memoLists = useSelector((state) => state.memos.memo);
  const navigate = useNavigate();
  return (
    <WrapCardList>
      {memoLists.map((v, l) => {
        return (
          <MemoCard
            key={v.id}
            text={v.text}
            explain={v.explain}
            example={v.example}
          />
        );
      })}
      <AddBtn
        onClick={() => {
          navigate("add");
        }}
      >
        +
      </AddBtn>
    </WrapCardList>
  );
}
const spinAnimation = keyframes`
to{
  transform: rotate(0deg);
}
from{
  transform: rotate(90deg);
}
`;

const WrapCardList = styled.div`
  ${flex({ gap: "1.5rem", jutify: "space-around" })}
  flex-wrap: wrap;
`;
const AddBtn = styled.button`
  position: absolute;
  border: none;
  bottom: 20px;
  right: 20px;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  font-size: 4rem;
  line-height: 4rem;
  color: var(--white);
  background-color: var(--green);
  :hover {
    animation: ${spinAnimation} 1s infinite linear;
  }
`;
