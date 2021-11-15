import styled from 'styled-components/native';
import logo from './logo.svg';
import './App.css';

const AppView = styled.View`
  text-align: center;
`;

function App() {
  return (
    <AppView>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </AppView>
  );
}

export default App;
