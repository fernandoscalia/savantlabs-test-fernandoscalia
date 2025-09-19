// This is my todo type - the main entity of the application (and the only one)
export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
  completedAt?: number;
}
