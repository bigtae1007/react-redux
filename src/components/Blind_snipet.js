import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import flex from "../lib/flex";

export default function BlindSnipet() {
  return (
    <WrapDiv>
      <div>
        <p> 로딩중..... 기다렷!</p>
      </div>
    </WrapDiv>
  );
}
const FontAnimation = keyframes`
0%{
  transform: translate(-0%, -0%);
}
25%{
  transform: translate(100%, 100%);

}
50%{
  transform: translate(100%, -0%);

}
75%{
  transform: translate(-0%, 100%);

}
100%{
  transform: translate(-0%, -0%);

}
`;

const WrapDiv = styled.div`
  width: 100vw;
  height: 100vh;
  ${flex({ jutify: "center", gap: 0 })}
  background-color: #86efac;
  & > div {
    position: absolute;
    width: 300px;
    height: 200px;
    border: bold;
    font-size: 4em;
    animation: ${FontAnimation} infinite 20s linear;
  }
`;
