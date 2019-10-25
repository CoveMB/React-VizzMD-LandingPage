import { initStore } from './useStore';

const configurePositionStore = () => {
  const actions = {
    SET_POSITION: (currentState, newPosition) => {
      // const currentPosition = window.scrollY;
      //
      // if (currentPosition > currentState.refsOffsets.ongoing - 400) {
      //   return { position: "ongoing" };
      // } else if (currentPosition > currentState.refsOffsets.features - 400
      //   && currentPosition < currentState.refsOffsets.ongoing - 400) {
      //   return { position: "features" };
      // } else if (currentPosition < currentState.refsOffsets.features - 400
      //   && currentPosition > currentState.refsOffsets.cards - 400) {
      //   return { position: "cards" };
      // } else if (currentPosition < currentState.refsOffsets.cards - 400) {
      //   return { position: "top" };
      // }
      return { position: newPosition };
    }
  };
  initStore(actions, { position: "top" });
};

export default configurePositionStore;
