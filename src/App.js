import React, { Component } from 'react';

import './App.css';
import Header from './components/template/header/header'
import Footer from './components/template/footer/footer'
import Router from './main/routes'


class App extends Component {
  render() {
    return (
      <main>
        <Header/>
        <Router/>
        <Footer/>
      </main>
    );
  }
}

export default App;
