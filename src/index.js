import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NewsItem from './components/NewsItem';
import NewsHeader from './components/NewsHeader';
import NewsList from './components/NewsList';

class App extends Component {
  render() {
    return (
      <NewsList />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
