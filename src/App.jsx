import "./styles.css";
import React, { useState } from "react";

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
          {incompleteTodos.map((todo, index) => {
            return (
              <ul key={todo} className="list-row">
                <li>{todo}</li>
                {/* onClickイベントを設定し、クリックした時の処理がまとまっている関数名を記述し、配列の中のindex番号を取得する */}
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </ul>
            );
          })}
        </div>
      </div>

      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <div>
          {completeTodos.map((todo, index) => {
            return (
              <ul key="todo" className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
};
