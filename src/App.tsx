import { AppKitProvider } from '@/Providers';
import Header from '@/components/Header';
import Home from '@/pages/Home';
import '@/styles/App.css';
import '@/styles/index.css';
import { useEffect } from 'react';

function App() {
  // Set dark mode globally
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <AppKitProvider>
      <Header />
      <main className='min-h-screen'>
        <Home />
      </main>
    </AppKitProvider>
  );
}

export default App;
