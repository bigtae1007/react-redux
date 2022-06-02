import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function MainCard({ name, list, link }) {
  const allCount = list.length;
  let completeCount = 0;
  list.forEach((v) => {
    if (v.complete) completeCount++;
  });
  const percent = parseInt((completeCount / allCount) * 1000) / 10;
  return (
    <>
      <WrapDiv>
        <h2>{name}</h2>
        <p>
          총 갯수 : <span>{allCount}</span>
        </p>
        <p>
          완료 갯수 : <span>{completeCount}</span>
        </p>
        <p>
          진행도 : <span>{percent} %</span>
        </p>
        <Link to={link}>
          <LinkBtn>바로 가기</LinkBtn>
        </Link>
      </WrapDiv>
    </>
  );
}

const WrapDiv = styled.div`
  border: 1px solid var(--red);
  border-radius: 10px;
  box-shadow: 2px 3px var(--grey);
  width: 250px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
`;

const LinkBtn = styled.button`
  width: 200px;
  margin: 0 auto;
  height: 50px;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  background-color: var(--grey);
`;
