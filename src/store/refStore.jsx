import { initStore } from './useStore';

const configureRefStore = () => {
  const actions = {
    SET_REFS: (currentState, refsOffsets) => {
      return { refsOffsets };
    }
  };
  initStore(actions, {});
};

export default configureRefStore;
