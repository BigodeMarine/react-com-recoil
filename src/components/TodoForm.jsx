import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from '../atoms/todoListAtom';

let id = 0;
function getId() {
  return id++;
}

export default function TodoForm() {
  const [input, setInput] = useState('');
  const [list, setList] = useRecoilState(todoListState);

  const addTodo = () => {
    if (!input.trim()) return;
    setList([...list, { id: getId(), text: input, isComplete: false }]);
    setInput('');
  };

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Nova tarefa" />
      <button onClick={addTodo}>Adicionar</button>
    </div>
  );
}