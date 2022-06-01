import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlindSnipet from "./components/Blind_snipet";
import GlobalStyle from "./elem/GlobalStyle";
import MemoHome from "./features/memo/MemoHome";
import { __getMemos } from "./redux/modules/memos";

function App() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.memos);
  useEffect(() => {
    dispatch(__getMemos());
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
      <MemoHome />
    </div>
  );
}

export default App;
