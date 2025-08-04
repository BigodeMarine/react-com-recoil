import { selector } from 'recoil';
import { todoListState, filterState } from '../atoms/todoListAtom';

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(filterState);
    const list = get(todoListState);

    switch (filter) {
      case 'completed':
        return list.filter((item) => item.isComplete);
      case 'pending':
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});