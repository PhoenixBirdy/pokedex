import { Header } from './components/Header';
import { Content } from './components/Content';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Content />
      </div>
    </BrowserRouter>
  );
}

export default App;
