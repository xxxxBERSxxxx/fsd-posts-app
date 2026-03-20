import { ThemeProvider } from '../shared/lib/theme/ThemeContext';
import { AppRouter } from './providers/router';

function App() {
  return (
    <ThemeProvider>
     <AppRouter />
    </ThemeProvider>
  );
}

export default App;







