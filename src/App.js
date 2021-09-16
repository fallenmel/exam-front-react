import AppRoutes from './routes';
import './styles/common.css';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './store';

const store = configureStore();

function App() {
  return (
    <>
      <ReduxProvider store={store}>
        <AppRoutes />
      </ReduxProvider>
    </>
  );
}

export default App;
