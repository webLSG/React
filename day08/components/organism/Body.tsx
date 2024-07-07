import { useEffect, useState } from "react";
import TodoItem, { TodoItemProps } from "../molecule/TodoItem";
import AddButton from "../atom/AddButton";
import {
  initializeTodolist,
  localGet,
  localSet,
  userInput,
} from "../../utils/util";
import { INFO } from "../../constants/infoMessage";
import { APIKEY } from "../../constants/apiKey";

const Body = () => {
  const [id, setId] = useState<number>(0);
  const [todoitems, setTodoitems] = useState<TodoItemProps[]>([]);

  // obj → string / JSON: 서버전달하기위한 오브젝트 타입
  const addItem = () => {
    const newData = { id, contents: userInput(INFO.TODO) };
    setTodoitems((prev) => {
      const updatedData = [...prev, newData];
      localSet(updatedData);
      return updatedData;
    });
    setId((prev) => prev + 1);
  };
  const deleteItem = (id: number) =>
    setTodoitems((prev) => {
      const updatedData = prev.filter((value) => value.id !== id);
      localSet(updatedData);
      return updatedData;
    });

  useEffect(() => initializeTodolist({ setId, setTodoitems }), []);

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="w-full h-fit px-7 py-10 flex flex-col gap-5 bg-slate-50 shadow-md">
        {todoitems.map((v, i) => (
          <TodoItem key={v.id} {...v} onDelete={() => deleteItem(v.id)} />
        ))}
      </div>
      <div className="relative bottom-6">
        <AddButton handleClick={addItem} />
      </div>
    </div>
  );
};

export default Body;
