import logo from './logo.svg';
import classNames from 'classnames/bind';
import styles from './App.module.scss';

let cx = classNames.bind(styles)


function App() {
  return (
    <div className={cx('App')}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          deploy demo
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
    </div>
  );
}

export default App;
