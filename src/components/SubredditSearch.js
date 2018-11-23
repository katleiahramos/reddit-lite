import React, { Component } from "react";

class SubredditSearch extends Component {
    state = {
        searchTerm: ''
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        this.props.fetchPosts(this.state.searchTerm)
        this.props.setQuery(this.state.searchTerm)
    }

    handleOnChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        })
      }

    render(){
        return (
            <div className="SubredditSearch">
                <form onSubmit={this.handleOnSubmit}>
                    <label><h2>Enter a search term to find a Subreddit:</h2>
                        <input type="text" value={this.state.searchTerm} id="searchTerm" onChange={this.handleOnChange} />
                    </label>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default SubredditSearch;