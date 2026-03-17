import { ThemeProvider } from './shared/lib/theme/ThemeContext';
import MainLayout from './shared/layouts/MainLayout';
import PostList from './widgets/PostList/PostList';
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <MainLayout>
        <PostList isLoading={loading} />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;