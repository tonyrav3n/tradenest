import { AppKitProvider } from '@/Providers';
import Header from '@/components/Header';
import '@/styles/App.css';
import '@/styles/index.css';
import '@rainbow-me/rainbowkit/styles.css';

function App() {
  return (
    <AppKitProvider>
      <Header />
      <main>
        <h1>Hi</h1>
      </main>
    </AppKitProvider>
  );
}

export default App;
