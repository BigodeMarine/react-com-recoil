import TodoForm from './components/TodoForm';
import TodoFilter from './components/TodoFilter';
import TodoList from './components/TodoList';

export default function App() {
  return (
    <div className="container">
      <h1>To-do List com Recoil</h1>
      <TodoForm />
      <TodoFilter />
      <TodoList />
    </div>
  );
}