import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

interface TodoInputProps {
  onAdd: (text: string) => void;
}

export default function TodoInput({ onAdd }: TodoInputProps) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText("");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} display="flex" gap={2} mb={2}>
      <TextField
        label="New Task"
        variant="outlined"
        size="small"
        fullWidth
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Add
      </Button>
    </Box>
  );
}
