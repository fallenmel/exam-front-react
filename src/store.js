import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = () => {
  const preloadedState = window.PRELOADED_STATE;

  // delete window.PRELOADED_STATE;
  let store = null;
  if (process.env.NODE_ENV === 'development') {
    store = createStore(
      reducer,
      preloadedState,
      composeWithDevTools(applyMiddleware(thunk))
    );
  } else {
    store = createStore(reducer, preloadedState, applyMiddleware(thunk));
  }

  return store;
};

export default configureStore;
