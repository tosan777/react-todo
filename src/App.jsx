import "./styles.css";
import React, { useState } from "react";

export const App = () => {
  // inputに入った値をstateする
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setincompleteTodos] = useState([
    "ああああ",
    "いいいいい"
  ]);
  const [completeTodos, setcompleteTodos] = useState(["ううううう"]);

  const onChageTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    // もしtodoTextの中身が空だった場合何も起こらない
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setincompleteTodos(newTodos);
    setTodoText("");
  };

  return (
    <>
      <div className="input-area">
        <input
          type="text"
          placeholder="TODOを入力"
          value={todoText}
          // onChange：値を加工する
          onChange={onChageTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>

      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <div>
          {incompleteTodos.map((todo) => {
            return (
              <ul key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </ul>
            );
          })}
        </div>
      </div>

      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <div>
          {completeTodos.map((todo) => {
            return (
              <ul key="todo" className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
};
