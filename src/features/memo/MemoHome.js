import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../../components/Header";
import MemoAdd from "./MemoAdd";
import MemoCardList from "./MemoCardList";
export default function MemoHome() {
  return (
    <>
      <Header name={"나만의 단어장"} color={"var(--green)"} />
      <Routes>
        <Route path="/memo" element={<MemoCardList />} />
        <Route path="/memo/add" element={<MemoAdd />} />
      </Routes>
    </>
  );
}
