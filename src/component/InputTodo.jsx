import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div className="input-area">
      <input
        type="text"
        placeholder="TODOを入力"
        value={todoText}
        // onChange：値を加工する
        onChange={onChange}
      />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
