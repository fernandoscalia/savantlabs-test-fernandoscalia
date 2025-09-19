import type { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className="flex justify-between items-center border-b py-2">
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="mr-2"
        />
        <span
          className={todo.completed ? "line-through text-gray-500" : ""}
        >
          {todo.text}
        </span>
      </div>
      <button
        className="text-red-500 hover:underline"
        onClick={() => onDelete(todo.id)}
      >
        Delete
      </button>
    </div>
  );
}
