import logo from './logo.svg';
import './App.css';
import { Links } from './components/Links';
import { Button } from './components/Button';
import { Logo } from './components/Logo';

function App() {
  return (
    <div className="App">
      <Logo />
      <Links />
      <Button />
    </div>
  );
}

export default App;
