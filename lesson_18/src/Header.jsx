import React from 'react';
import './Header.scss';
import {Button} from './Button.jsx'
export class Header extends React.Component {
  render() {
    return <header className="page-header">
      <nav className="page-nav">
        <a href="">Link 1</a><a href="">Link 2</a><a href="">Link 3</a><a href="">Link 4</a><a href="">Link 5</a>
      </nav>
      <Button />
    </header>
  }
}