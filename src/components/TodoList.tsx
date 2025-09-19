import type { Todo } from "../types/todo";
import { List, Paper } from "@mui/material";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
    // Sorting function to display Active first, Completed later
    // and also checking between the completes and not completed who needs to go first.
  const sorted = [...todos].sort((a, b) => {
    // If both are not completed, sort by createdAt date - asc
    if (a.completed === b.completed && a.completed === false) {
      return a.createdAt - b.createdAt;
    }
    // if both are completed, sort by completion date - asc
    if (a.completed && b.completed && a.completed === b.completed && a.completed === true) {
      return (a.completedAt ?? 0) - (b.completedAt ?? 0);
    }

    //if one is complete and other not, completes must come later
    return a.completed ? 1 : -1;
  });

  return (
    <Paper elevation={2}>
      <List>
        {sorted.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </List>
    </Paper>
  );
}
