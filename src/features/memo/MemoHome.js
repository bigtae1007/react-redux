import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../../components/Header";
import MemoAdd from "./MemoAdd";
import MemoCardList from "./MemoCardList";
import MemoChange from "./MemoChange";
export default function MemoHome() {
  return (
    <>
      <Header name={"나만의 단어장"} color={"var(--green)"} />
      <Routes>
        <Route path="/memo" element={<MemoCardList />} />
        <Route path="/memo/add" element={<MemoAdd />} />
        <Route path="/memo/change/:index" element={<MemoChange />} />
      </Routes>
    </>
  );
}
