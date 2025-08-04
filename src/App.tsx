import { AppKitProvider } from '@/Providers';
import Header from '@/components/Header';
import Home from '@/pages/Home';
import ListProduct from '@/pages/ListProduct';
import '@/styles/App.css';
import '@/styles/index.css';
import { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  // Set dark mode globally
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <AppKitProvider>
      <Router>
        <Header />
        <main className='min-h-screen'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/list-product' element={<ListProduct />} />
          </Routes>
        </main>
      </Router>
    </AppKitProvider>
  );
}

export default App;
