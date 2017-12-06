import React from 'react';

class RedditSearch extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      board: '',
      limit: 20,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    let board = this.state.board;
    this.props.getBoard(board);
    console.log('__STATE__', this.state);
  }
  
  handleChange(e) {
    this.setState({board: e.target.value});
  }
  
  render() {
    return (
      <div>
        <h4>Enter Reddit Board Name</h4>
        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.handleChange} />
          <input type='submit' />
        </form>
      </div>
      )
  }
}

export default RedditSearch;