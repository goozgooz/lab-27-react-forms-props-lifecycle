import React from 'react';
import ReactDOM from 'react-dom';
import superagent from 'superagent';

import RedditSearch from './components/search-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.getBoard = this.getBoard.bind(this);
  }
  
  getBoard(board,limit) {
    let searchFormLimit = limit || 10;
    superagent.get(`https://www.reddit.com/r/${board}.json?limit=${searchFormLimit}`)
      .then(results => console.log(results.body.data))
      .catch(console.log)
  }
  
  render() {
    return (
      <div>
        <h1>Sup Dawg</h1>
        <RedditSearch getBoard={this.getBoard} />
      </div>
      )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));