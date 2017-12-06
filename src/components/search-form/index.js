import React from 'react';

class RedditSearch extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      board: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
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
          <input
            type='text'
            // value = {this.state.board}
            onChange = {this.handleChange}
          />
          <input type='submit'></input>
        </form>
      </div>
      )
  }
}

export default RedditSearch;