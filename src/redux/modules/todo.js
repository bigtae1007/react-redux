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

//action server
const requestGetTodo = (payload) => {
  return { type: GET_TODO_REQUEST, payload };
};
const errorGetTodo = (payload) => {
  return { type: GET_TODO_ERROR, payload };
};
// 미들웨어 함수

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
export const __addTodo = (payload) => async (dispatch, getState) => {
  const todoData = await addDoc(collection(db, "todos"), payload);
  dispatch(addTodo({ id: todoData.id, ...payload }));
};

export const __changeComplete = (payload) => async (dispatch, getState) => {
  const docRef = doc(db, "todos", payload.id);
  if (payload.complete) {
    await updateDoc(docRef, { complete: true });
  } else {
    await updateDoc(docRef, { complete: false });
  }
};

export default function buckets(state = initialState, action = {}) {
  switch (action.type) {
    case GET_TODO_REQUEST:
      return { ...state, loading: action.payload };
    case GET_TODO_SUCCESS:
      return { ...state, todo: action.payload };
    case ADD_TODO:
      console.log("a");
      console.log(action.payload);
      return { ...state, todo: [...state.todo, action.payload] };
    case GET_TODO_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
