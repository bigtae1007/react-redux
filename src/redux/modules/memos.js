import { db } from "../../firebase";

//순서대로 원하는db선택하기(콜렉션),수정할 document가져오기, 하나 가져오기, 여러개 가져오기, 추가하기, 수정하기  firebase
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { async } from "@firebase/util";
import { memo } from "react";

// 초기 기본 값
const initialState = {
  memo: [],
  loading: false,
  error: null,
};

//action
const ADD_MEMO = "memos/ADD_MEMO";
const DELETE_MEMO = "memos/DELETE_MEMO";
const UPDATE_MEMO = "memos/UPDATE_MEMO";
const UPDATE_COMPLETE = "complete/UPDATE_CHECK";

// server state
const GET_MEMO_REQUEST = "memos/GET_MEMO_REQUEST";
const GET_MEMO_SUCCESS = "memos/GET_MEMO_SUCCESS";
const GET_MEMO_ERROR = "memos/GET_MEMO_ERROR";

//action creator
const addMemoCard = (payload) => {
  return { type: ADD_MEMO, payload };
};
export const deleteMemoCard = (payload) => {
  return { type: DELETE_MEMO, payload };
};
export const updateMemoCard = (payload) => {
  return { type: UPDATE_MEMO, payload };
};
export const updateComplete = (payload) => {
  return { type: UPDATE_COMPLETE, payload };
};
//
const getMemoRequest = (payload) => {
  return { type: GET_MEMO_REQUEST, payload };
};
const getMemoSuccess = (payload) => {
  return { type: GET_MEMO_SUCCESS, payload };
};
const getMemoError = (payload) => {
  return { type: GET_MEMO_ERROR, payload };
};

//thunk 미들웨어 함수
export const __getMemos = () => {
  return async function (dispatch) {
    // 요청 시작과 함께 loading true로 변경
    dispatch(getMemoRequest(true));
    try {
      // 성공시 데이터 store 저장 액션
      const memo_data = await getDocs(collection(db, "memos"));
      const memo_list = [];
      memo_data.forEach((doc) => {
        memo_list.push({ id: doc.id, ...doc.data() });
      });
      dispatch(getMemoSuccess(memo_list));
    } catch (error) {
      // 에러코드 저장 액션
      dispatch(getMemoError(error));
    } finally {
      // 끝나고 load false로 변경
      dispatch(getMemoRequest(false));
    }
  };
};
// 메모 추가하기
export const __addMemo = (payload) => async (dispatch, getState) => {
  dispatch(getMemoRequest(true));
  try {
    const add_memo_data = await addDoc(collection(db, "memos"), payload);
    dispatch(addMemoCard({ id: add_memo_data.id, ...payload }));
  } catch (error) {
    // 에러코드 저장 액션
    dispatch(getMemoError(error));
  } finally {
    // 끝나고 load false로 변경
    dispatch(getMemoRequest(false));
  }
};
// 메모 complete 변경
export const __changeComplete = (payload) => async (dispatch, getState) => {
  dispatch(getMemoRequest(true));
  try {
    const docRef = doc(db, "memos", payload.id);
    // db값 변경
    if (payload.complete) {
      await updateDoc(docRef, { complete: false });
    } else {
      await updateDoc(docRef, { complete: true });
    }
    console.log(getState().memos);
    const memo_index = getState().memos.memo.findIndex((v) => {
      return v.id === payload.id;
    });
    dispatch(updateComplete(memo_index));

    // 해당 데이터 인덱스 값 전달
  } catch (error) {
    // 에러코드 저장 액션
    dispatch(getMemoError(error));
  } finally {
    // 끝나고 load false로 변경
    dispatch(getMemoRequest(false));
  }
};
//reducer
export default function memos(state = initialState, action = {}) {
  switch (action.type) {
    case GET_MEMO_REQUEST:
      return { ...state, loading: action.payload };

    case GET_MEMO_SUCCESS:
      return { ...state, memo: [...action.payload] };

    case ADD_MEMO:
      console.log(action.payload);
      return { ...state, memo: [...state.memo, action.payload] };

    case UPDATE_COMPLETE:
      console.log(action, state.memo);
      const changeComplete = state.memo.map((v, l) => {
        if (l === action.payload) {
          v.complete ? (v.complete = false) : (v.complete = true);
          return v;
        } else {
          return v;
        }
      });
      return { ...state, memo: changeComplete };
    default:
      return state;
  }
}
