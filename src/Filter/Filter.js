import React, { Component } from 'react';

class Filter extends Component {
    render() {
        const filterType = this.props.filterType
        const filterOptions = {
            printType: [
                {
                    value: 'all',
                    name: 'All'
                },
                {
                    value: 'books',
                    name: 'Book'
                },
                {
                    value: 'magazines',
                    name: 'Magazines'
                }
            ],
            bookType: [
                {
                    value: 'No-Filter',
                    name: 'No Filter'
                },
                {
                    value: 'free-ebooks',
                    name: 'Free ebooks'
                },
                {
                    value: 'paid-ebooks',
                    name: 'Paid ebooks'
                },
                {
                    value: 'ebooks',
                    name: 'ebooks'
                }
            ]
        }
        const options = filterOptions[filterType].map(option => {
            return (
            <option value={option.value} key={option.value}>{option.name}</option>
            )
        })
        
        return (   
        <div className={filterType}>
            <label htmlFor="title">{filterType}: </label>
            <select name={filterType} id={filterType} onChange={e => this.props.filterChange(filterType, e.target.value)}>
               {options}
            </select>
            
        </div>);
    }
}

export default Filter