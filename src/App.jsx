import "./styles.css";
import React, { useState } from "react";
import { InputTodo } from "./component/InputTodo";
import { IncompleteTodos } from "./component/IncompleteTodos";
import { CompleteTodos } from "./component/CompleteTodos";

export const App = () => {
  // inputに入った値をstateする
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setincompleteTodos] = useState([]);
  const [completeTodos, setcompleteTodos] = useState([]);

  const onChageTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    // もしtodoTextの中身が空だった場合何も起こらない
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setincompleteTodos(newTodos);
    setTodoText("");
  };

  // 削除ボタン
  // index番号を引数で受け取る
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    // splice：一つ目の引数に削除したい値、二つ目の引数に削除したい個数
    newTodos.splice(index, 1);
    setincompleteTodos(newTodos);
  };

  // 完了ボタン
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setincompleteTodos(newIncompleteTodos);
    setcompleteTodos(newCompleteTodos);
  };

  // 完了のTODO削除
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    // 未完了のTODOに追加
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setcompleteTodos(newCompleteTodos);
    setincompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChageTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />

      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>todoの数5個までやで、消化しなはれ</p>
      )}

      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
