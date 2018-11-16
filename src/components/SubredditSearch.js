import React, { Component } from "react";

class SubredditSearch extends Component {
    state = {
        searchTerm: ''
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        this.props.fetchPosts(this.state.searchTerm)
    }

    handleOnChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        })
      }

    render(){
        return (
            <div id="SubredditSearch">
                <form onSubmit={this.handleOnSubmit}>
                    <label>Enter a search term to find a Subreddit:
                        <input type="text" value={this.state.searchTerm} id="searchTerm" onChange={this.handleOnChange} />
                    </label>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default SubredditSearch;