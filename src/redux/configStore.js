//configStore.js
// createStore 제외 미들웨어 작성 준비
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// redux-thunk
import thunk from "redux-thunk";
import memos from "./modules/memos";
import todos from "./modules/todo";
// root 리듀서를 만들어줍니다.
// 나중에 리듀서를 여러개 만들게 되면 여기에 하나씩 추가해주는 거예요!
const middlewares = [thunk];
const rootReducer = combineReducers({ memos, todos });
const enhancer = applyMiddleware(...middlewares);
// 스토어를 만듭니다.
const store = createStore(rootReducer, enhancer); //, enhancer << store

export default store;
