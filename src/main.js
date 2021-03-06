import React from 'react';
import ReactDOM from 'react-dom';
import superagent from 'superagent';

import RedditSearch from './components/search-form';
import SearchResults from './components/search-result-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: '',
      posts: []
    }
    this.getBoard = this.getBoard.bind(this);
  }
  
  getBoard(board,limit) {
    let searchFormLimit = limit || 10;
    superagent.get(`https://www.reddit.com/r/${board}.json?limit=${searchFormLimit}`)
      .then(results => {
        this.setState({posts:results.body.data.children})
        this.setState({board:board})
      })
      .catch(console.log) // need to add class of error here 
  }
  
  render() {
    return (
      <div>
        <h1>Sup Dawg</h1>
        <RedditSearch getBoard={this.getBoard} />
        <SearchResults posts={this.state.posts} board={this.state.board}/>
      </div>
      )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));