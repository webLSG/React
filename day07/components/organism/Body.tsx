import { useState } from "react";
import AddButton from "../atom/AddButton";
import TodoItem, { TodoItemProps } from "../molecule/TodoItem";

const Body = () => {
  const [todoitems, setTodoitems] = useState<TodoItemProps[]>([
    { contents: "축구하기" },
    { contents: "유료2024보기" },
    { contents: "유튜브" },
  ]);

  const addItem = () => {
    const todo = prompt("오늘 할일 추가") || "입력 오류";
    setTodoitems((prev) => {
      const newItems = [...prev, { contents: todo }];
      return newItems;
    });
  };
  const deleteItem = (index: number) => {
    setTodoitems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      {todoitems.map((v, i) => (
        <TodoItem key={i} {...v} />
      ))}

      <AddButton handleClick={() => {}} />
    </div>
  );
};

export default Body;
