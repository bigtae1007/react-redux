import React from "react";
import Header from "../../components/Header";
import MemoCardList from "./MemoCardList";
export default function MemoHome() {
  return (
    <>
      <Header name={"나만의 단어장"} color={"var(--green)"} />
      <MemoCardList />
    </>
  );
}
