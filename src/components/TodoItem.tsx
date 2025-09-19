import type { Todo } from "../types/todo";
import {
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" onClick={() => onDelete(todo.id)}>
          <DeleteIcon color="error" />
        </IconButton>
      }
    >
      <Checkbox
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <ListItemText
        primary={
          <Typography
            sx={{
              textDecoration: todo.completed ? "line-through" : "none",
              color: todo.completed ? "text.secondary" : "text.primary",
            }}
          >
            {todo.text}
          </Typography>
        }
        secondary={
          <>
            <Typography variant="caption" color="text.secondary">
              Created: {new Date(todo.createdAt).toLocaleString()}
            </Typography>
            {todo.completed && todo.completedAt && (
              <Typography variant="caption" color="text.secondary" display="block">
                Completed: {new Date(todo.completedAt).toLocaleString()}
              </Typography>
            )}
          </>
        }
      />
    </ListItem>
  );
}
