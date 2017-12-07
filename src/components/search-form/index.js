import React from 'react';

class RedditSearch extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      board: '',
      limit: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    let board = this.state.board;
    let limit = this.state.limit;
    this.props.getBoard(board, limit);
  }
  
  handleChange(e) {
    e.target.id === 'boardName' ? this.setState({board:e.target.value}) : this.setState({limit: e.target.value})
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
    
        <p>Enter Reddit Board Name</p>
          <input type='text' id='boardName' onChange={this.handleChange} />
    
        <p>Enter Number of Posts You Wish to See</p>
          <input type = 'number' id='limit' onChange={this.handleChange} />
    
        <br/> <br/>
    
          <input type='submit' />

        </form>
      </div>
      )
  }
}

export default RedditSearch;