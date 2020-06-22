import { createAsyncAction } from "typesafe-actions";
import { Todo, TodoData, AuthData, User } from "@src/types";
import { CreateAccountFormValues, LoginFormValues, UserState } from "../types";

export const addTodo = createAsyncAction(
  "ADD_TODO_REQUEST",
  "ADD_TODO_SUCCESS",
  "ADD_TODO_REQUEST"
)<TodoData, Todo, string>();

export const removeTodo = createAsyncAction(
  "REMOVE_TODO_REQUEST",
  "REMOVE_TODO_SUCCESS",
  "REMOVE_TODO_REQUEST"
)<number, number, string>();

export const fetchTodos = createAsyncAction(
  "FETCH_TODO_REQUEST",
  "FETCH_TODO_SUCCESS",
  "FETCH_TODO_REQUEST"
)<undefined, Todo[], string>();

export const createAccount = createAsyncAction(
  "CREATE_ACCOUNT_REQUEST",
  "CREATE_ACCOUNT_SUCCESS",
  "CREATE_ACCOUNT_FAILURE"
)<CreateAccountFormValues, undefined, string>();

export const login = createAsyncAction(
  "LOGIN_REQUEST", 
  "LOGIN_SUCCESS", 
  "LOGIN_FAILURE"
)< LoginFormValues, AuthData, LoginFormValues >();

export const logout = createAsyncAction(
  "LOGOUT_REQUEST",
  "LOGOUT_SUCCESS",
  "LOGOUT_FAILURE"
)<undefined, undefined, string>();

export const fetchUser = createAsyncAction(
  "FETCH_USER_REQUEST",
  "FETCH_USER_SUCCESS",
  "FETCH_USER_FAILURE"
)<undefined, User, string>();

export const todoAction = { addTodo, removeTodo, fetchTodos };
export const authAction = { login, logout, fetchUser };
export default { todoAction, authAction };
