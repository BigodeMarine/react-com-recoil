import { useRecoilState } from 'recoil';
import { todoListState } from '../atoms/todoListAtom';

export default function TodoItem({ item }) {
  const [list, setList] = useRecoilState(todoListState);

  const toggleComplete = () => {
    const updated = list.map((todo) =>
      todo.id === item.id ? { ...todo, isComplete: !todo.isComplete } : todo
    );
    setList(updated);
  };

  const removeItem = () => {
    const updated = list.filter((todo) => todo.id !== item.id);
    setList(updated);
  };

  return (
    <li>
      <span style={{ textDecoration: item.isComplete ? 'line-through' : 'none' }}>
        {item.text}
      </span>
      <button onClick={toggleComplete}>
        {item.isComplete ? 'Desmarcar' : 'Concluir'}
      </button>
      <button onClick={removeItem}>Remover</button>
    </li>
  );
}