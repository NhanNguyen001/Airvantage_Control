import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className='background'> //
      {/* <div className="App">
        <div className="dark-cover">
          <header className="App-header">
            <h3>Bonjour garcçon Vietnamien!</h3>
            <h1>au grand monde.</h1>
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
        </div>
      </div> */}

      <div className="dark-background">
        <div class="grid-container">
          <div class="grid-item-1">
            <p class='caption'>sldgs</p>
          </div>
          <div class="grid-item-2"></div>
          <div class="grid-item-3"></div>
          <div class="grid-item-4"></div>
          <div class="grid-item-5"></div>
          <div class="grid-item-6"></div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;