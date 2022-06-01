import React from "react";
import styled from "styled-components";
import flex from "../lib/flex";

export default function Header({ name = "", color = "var(--green)" }) {
  return (
    <WarpHeader color={color}>
      <h2>{name}</h2>
    </WarpHeader>
  );
}
const WarpHeader = styled.div`
  ${flex({ jutify: "center", gap: 0 })}
  padding: 20px;
  position: fixed;
  top: 0;
  width: 100%;
  font-size: 1.5rem;
  border-bottom: 2px solid ${({ color }) => color};
`;
