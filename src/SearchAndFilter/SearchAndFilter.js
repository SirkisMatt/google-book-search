import React, { Component } from 'react';
import './SearchAndFilter.css';
import SearchBar from '../SearchBar/SearchBar'
import Filter from '../Filter/Filter'



class SearchAndFilter extends Component {
    render() {
        return (
            <form id="search-and-filter" onSubmit={e => this.props.searchQueryChanged(e)}>
                <SearchBar />
                <div className="filter-options">
                    <Filter
                    filterChange={(type, value) => this.props.filterChange(type, value)}
                    filterType='printType' 
                    />
                    <Filter 
                    filterChange={(type, value) => this.props.filterChange(type, value)}
                    filterType='bookType'
                    />
                </div>
            </form>
        )
    }
}

export default SearchAndFilter