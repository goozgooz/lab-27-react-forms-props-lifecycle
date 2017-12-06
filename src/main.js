import React from 'react';
import ReactDOM from 'react-dom';

import RedditSearch from './components/search-form';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Sup Dawg</h1>
        <RedditSearch />
      </div>
      )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));