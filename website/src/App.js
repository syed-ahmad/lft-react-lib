import React from 'react';
import { Button, Header } from '../../src/components';

const App = () => {
  const currentDateTime = new Date().toLocaleString();

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <Button />
        </div>
      </div>
      <p>Loaded: {currentDateTime}</p>
    </div>
  );
};

export default App;
