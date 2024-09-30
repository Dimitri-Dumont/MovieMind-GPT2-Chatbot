import React from 'react';
import logo from './logo.svg';

const App = () => {
  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <style>
        {`
          .App-logo {
            height: 40vmin;
            pointer-events: none;
          }

          @media (prefers-reduced-motion: no-preference) {
            .App-logo {
              animation: App-logo-spin infinite 20s linear;
            }
          }

          .App-header {
            background-color: #282c34;
            min-height: 10vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: calc(10px + 2vmin);
            color: white;
          }

          .App-link {
            color: #61dafb;
          }

          @keyframes App-logo-spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello world...</p>
      </header>
    </div>
  );
};

export default App;