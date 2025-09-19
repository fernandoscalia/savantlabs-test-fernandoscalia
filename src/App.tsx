import { Container, Typography, Paper, Box } from "@mui/material";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useTodos } from "./hooks/useTodos";

export default function App() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#676f5dff",
      }}
    >
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h4" gutterBottom align="center">
            To-Do List
          </Typography>
          <TodoInput onAdd={addTodo} />
          <Box mt={2}>
            <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
