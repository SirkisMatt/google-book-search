import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
       
        return (   
        <div className="SearchBox">
            <label htmlFor="title">Search:</label>
            <input type="text" name="search" id="search" placeholder="Search"/>
            <button type="submit" >Search</button>
        </div>);
    }
}

export default SearchBar

//value={this.props.searchTerm}
//onChange={e => this.props.handleUpdate(e.target.value)}