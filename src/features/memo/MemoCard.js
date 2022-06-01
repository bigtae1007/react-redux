import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// 컴포넌트
import flex from "../../lib/flex";
import { __changeComplete, __deleteMemo } from "../../redux/modules/memos";
export default function MemoCard({
  text,
  explain,
  example,
  id,
  complete,
  index,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // 완료 상태 변경 이벤트
  const chgComplete = (id, complete) => {
    dispatch(__changeComplete({ id, complete }));
  };
  // 메모 삭제 이벤트
  const deleteMemo = (id) => {
    dispatch(__deleteMemo(id));
    alert("삭제되었습니다 !");
  };

  return (
    <WrapCard complete={complete}>
      <BtnDiv>
        <Btn
          onClick={() => {
            chgComplete(id, complete);
          }}
        >
          &#10003;
        </Btn>
        <Btn
          onClick={() => {
            navigate(`change/${index}`);
          }}
        >
          &#8634;
        </Btn>
        <Btn
          onClick={() => {
            deleteMemo(id);
          }}
        >
          &#10008;
        </Btn>
      </BtnDiv>
      <Span>단어</Span>
      <Text>{text}</Text>
      <Span>설명</Span>
      <Text>{explain}</Text>
      <Span>예시</Span>
      <Text color="var(--blue)">{example}</Text>
    </WrapCard>
  );
}

const WrapCard = styled.div`
  ${flex({ gap: "0.5rem", direction: "column" })}
  border: 1px solid var(--green);
  border-radius: 0.5rem;
  min-width: 300px;
  width: 30vw;
  padding: 0.6rem;
  position: relative;
  background-color: ${({ complete }) => {
    return complete ? "var(--grey)" : "var(--white)";
  }};
`;
const BtnDiv = styled.div`
  ${flex({ gap: "0.2rem" })}
  top: 15px;
  right: 15px;
  position: absolute;
`;
const Btn = styled.button`
  border: none;
  width: 25px;
  height: 25px;
  background-color: transparent;
  cursor: pointer;
  color: green;
  font-size: 18px;
  border-radius: 50%;
  &:hover {
    background-color: green;
    color: #fff;
  }
`;
const Span = styled.span`
  text-decoration: underline;
`;

const Text = styled.p`
  color: ${({ color }) => color || "var(--black)"};
`;
