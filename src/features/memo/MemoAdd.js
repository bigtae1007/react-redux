import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import flex from "../../lib/flex";
import { __addMemo } from "../../redux/modules/memos";

export default function MemoAdd() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const text = useRef();
  const explain = useRef();
  const example = useRef();
  const password = useRef();
  function addMemo(event) {
    if (
      text.current.value !== "" &&
      explain.current.value !== "" &&
      example.current.value !== "" &&
      password.current.value !== ""
    ) {
      dispatch(
        __addMemo({
          text: text.current.value,
          explain: explain.current.value,
          example: example.current.value,
          password: password.current.value,
          complete: false,
        })
      );
      navigate(-1);
    } else {
      alert("모든 칸을 입력해 주세요");
    }
  }

  return (
    <>
      <WarpMemoAdd>
        <WrapForm>
          <h1>단어 추가하기</h1>
          <br></br>
          <label htmlFor="a">단어</label>
          <FormInput type="text" ref={text} />
          <label htmlFor="b">설명</label>
          <FormInput type="text" ref={explain} />
          <label htmlFor="c">예시</label>
          <FormInput type="text" ref={example} />
          <label style={{ color: "var(--red)" }} htmlFor="c">
            비밀번호
          </label>
          <FormInput type="text" ref={password} />
          <SubmitBtn
            onClick={(e) => {
              addMemo(e);
            }}
          >
            저장하기
          </SubmitBtn>
        </WrapForm>
      </WarpMemoAdd>
    </>
  );
}

const WarpMemoAdd = styled.div`
  min-width: 300px;
  max-width: 500px;
  width: 50%;
  height: 500px;
  margin: 0 auto;
`;
const WrapForm = styled.div`
  margin: 150px 0;
  padding: 80px 20px;
  border-radius: 1rem;
  box-shadow: 2px 2px var(--grey);
  border: 1px solid var(--green);
  ${flex({ gap: "1rem", direction: "column" })}
`;

const SubmitBtn = styled.button`
  border: none;
  border-radius: 1rem;
  color: var(--white);
  font-size: 1.2rem;
  background-color: var(--green);
  width: 60%;
  height: 5vh;
  margin: 0 auto;
`;

const FormInput = styled.input`
  border: none;
  border-bottom: 1px solid var(--black);
  padding: 5px 10px;
  outline: none;
  :focus {
    border-radius: 1rem;
    border: 3px solid var(--green);
    transition: 0.5s;
  }
`;
