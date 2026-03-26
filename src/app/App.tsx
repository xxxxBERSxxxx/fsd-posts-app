import { Provider } from 'react-redux';
import { store } from './providers/store/store';
import { ThemeProvider } from '../shared/lib/theme/ThemeContext';
import { AppRouter } from './providers/router';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </Provider>
  );
}

export default App;







