import React from 'react';

class SearchResults extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>{this.props.board}</h2>
        <ul>
          {this.props.posts.map((post,i) => {
            <li> 
              {console.log(post.data.title)}
              {post.data.title}
              </li>
          })
        }
          </ul>
        </div>
      )
    }
}


export default SearchResults;