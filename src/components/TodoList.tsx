import type { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  // Sorting function to display Active first, Completed later
  // comparing in ascending order: 'a' before 'b' by created date.
  // and comparing first by completed status, then by creation date
  const sorted = [...todos].sort((a, b) => {
    if (a.completed === b.completed) {
      return a.createdAt - b.createdAt; // oldest first
    }
    return a.completed ? 1 : -1;
  });

  return (
    <div>
      {sorted.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
