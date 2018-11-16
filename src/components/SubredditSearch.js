import React, { Component } from "react";

class SubredditSearch extends Component {
    state = {
        searchTerm: ''
    }
    render(){
        return (
            <div id="SubredditSearch">
                <form>
                    <label>Enter a search term to find a Subreddit:
                        <input type="text"/>
                    </label>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default SubredditSearch;