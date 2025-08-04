import { useRecoilState } from 'recoil';
import { filterState } from '../atoms/todoListAtom';

export default function TodoFilter() {
  const [filter, setFilter] = useRecoilState(filterState);

  return (
    <div>
      <button onClick={() => setFilter('all')} disabled={filter === 'all'}>
        Todas
      </button>
      <button onClick={() => setFilter('completed')} disabled={filter === 'completed'}>
        Concluídas
      </button>
      <button onClick={() => setFilter('pending')} disabled={filter === 'pending'}>
        Pendentes
      </button>
    </div>
  );
}