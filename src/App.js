import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import BlindSnipet from "./components/Blind_snipet";
import GlobalStyle from "./elem/GlobalStyle";
import MainHome from "./features/MainHome";
import MemoHome from "./features/memo/MemoHome";
import TodoHome from "./features/Todo/TodoHome";
import { __getMemos } from "./redux/modules/memos";
import MemoCardList from "./features/memo/MemoCardList";
import MemoAdd from "./features/memo/MemoAdd";
import MemoChange from "./features/memo/MemoChange";
import Header from "./components/Header";
import { __getRequest } from "./redux/modules/todo";
function App() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.memos);
  useEffect(() => {
    dispatch(__getMemos());
    dispatch(__getRequest());
  }, []);

  if (loading) {
    return <BlindSnipet />;
  }
  if (error) {
    return <p>i don't know</p>;
  }
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route
          path="/memo"
          element={<Header name={"나만의 단어장"} color={"var(--green)"} />}
        >
          <Route path="" element={<MemoCardList />} />
          <Route path="add" element={<MemoAdd />} />
          <Route path="change/:index" element={<MemoChange />} />
        </Route>
        {/* todo */}
        <Route path="/todo" element={<TodoHome />} />
      </Routes>
    </div>
  );
}

export default App;
