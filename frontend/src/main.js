import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/index';

const AppContainer = () => {
  return (
    <main>
      <App />
    </main>
  )
}

ReactDom.render(<AppContainer />, document.getElementById('root'));
