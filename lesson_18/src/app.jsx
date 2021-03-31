import React from 'react';
import ReactDOM from 'react-dom'
import { Header } from './Header.jsx';

import './app.scss';

class LikeButton extends React.Component {
  render() {
    return <button onClick={() => console.log('HELLO')}>Like!</button>
  }
}

class Page extends React.Component {
  render() {
    return <div>
      <Header />
      <main>
        <h1>HELLO WORLD</h1>
      </main>
      <footer>
        FOOTER
      </footer>
    </div>
  }
}

ReactDOM.render(<Page />, document.querySelector('#application-root'));

