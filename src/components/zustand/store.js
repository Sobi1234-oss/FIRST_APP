import { create } from 'zustand';

export const useCounterStore = create((set) => ({
  count: 1,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 }))
}));
export const useTodoStore = create((set) => ({
    todos: [],
    addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
    removeTodo: (todo) => set((state) => ({
      todos: state.todos.filter(item => item !== todo),
    })),
  }));