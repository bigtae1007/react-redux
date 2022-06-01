import { async } from "@firebase/util";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
const initialState = {
  todo: [],
  loading: false,
  error: null,
};

//action
const ADD_TODO = "memos/ADD_TODO";
const DELETE_TODO = "memos/DELETE_TODO";
const UPDATE_COMPLETE = "complete/UPDATE_COMPLETE";

// server state
const GET_TODO_REQUEST = "memos/GET_TODO_REQUEST";
const GET_TODO_SUCCESS = "memos/GET_TODO_SUCCESS";
const GET_TODO_ERROR = "memos/GET_TODO_ERROR";
//action creator
const successGetTodo = (payload) => {
  return { type: GET_TODO_SUCCESS, payload };
};
const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};
const changeComplete = (payload) => {
  return { type: UPDATE_COMPLETE, payload };
};

//action server
const requestGetTodo = (payload) => {
  return { type: GET_TODO_REQUEST, payload };
};
const errorGetTodo = (payload) => {
  return { type: GET_TODO_ERROR, payload };
};
// 미들웨어 함수
// 데이터 가져오기
export const __getRequest = () => async (dispatch, getState) => {
  dispatch(requestGetTodo(true));
  try {
    const todoListData = await getDocs(collection(db, "todos"));
    const todoList = [];
    todoListData.forEach((docs) => {
      todoList.push({ id: docs.id, ...docs.data() });
    });
    dispatch(successGetTodo(todoList));
  } catch (error) {
    dispatch(errorGetTodo(error));
  } finally {
    dispatch(requestGetTodo(false));
  }
};
// todo 추가하기
export const __addTodo = (payload) => async (dispatch, getState) => {
  const todoData = await addDoc(collection(db, "todos"), payload);
  dispatch(addTodo({ id: todoData.id, ...payload }));
};
// 완료 상태 변경
export const __changeComplete = (payload) => async (dispatch, getState) => {
  const docRef = doc(db, "todos", payload.id);
  if (payload.complete) {
    await updateDoc(docRef, { complete: false });
  } else {
    await updateDoc(docRef, { complete: true });
  }
  dispatch(changeComplete(payload.index));
};

export default function buckets(state = initialState, action = {}) {
  switch (action.type) {
    case GET_TODO_REQUEST:
      return { ...state, loading: action.payload };
    case GET_TODO_SUCCESS:
      return { ...state, todo: action.payload };
    case ADD_TODO:
      return { ...state, todo: [...state.todo, action.payload] };
    case UPDATE_COMPLETE:
      const newCompleteTodo = state.todo.map((v, l) => {
        if (l === action.payload) {
          v.complete ? (v.complete = false) : (v.complete = true);
          return v;
        } else {
          return v;
        }
      });
      return { ...state, todo: newCompleteTodo };
    case GET_TODO_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
