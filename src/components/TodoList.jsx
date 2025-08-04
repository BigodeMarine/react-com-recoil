import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from '../selectors/filteredTodoListSelector';
import TodoItem from './TodoItem';

export default function TodoList() {
  const todos = useRecoilValue(filteredTodoListState);

  return (
    <ul>
      {todos.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  );
}