import React, { Component } from 'react';
import './SearchAndFilter.css';
import SearchBar from '../SearchBar/SearchBar'
import Filter from '../Filter/Filter'



class SearchAndFilter extends Component {
    render() {
        return (
            <form id="search-and-filter">
                <SearchBar />
                <div className="filter-options">
                    <Filter
                    filterType='printType' 
                    />
                    <Filter 
                    filterType='bookType'
                    />
                </div>
            </form>
        )
    }
}

export default SearchAndFilter