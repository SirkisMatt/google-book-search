import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar'
import Filter from '../Filter/Filter'

class SearchAndFilter extends Component {
    render() {
        return (
            <form>
                <SearchBar />
                <Filter
                FilterType='PrintType' 
                dropDownOptions="All"
                />
                <Filter 
                FilterType='BookType'
                dropDownOptions="No-Filter"
                />
            </form>
        )
    }
}

export default SearchAndFilter