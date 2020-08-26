import React, { Component } from 'react';

class Filter extends Component {
    render() {
        const FilterType = this.props.FilterType
        const dropDownOptions = this.props.dropDownOptions
        
        return (   
        <div className={FilterType}>
            <label htmlFor="title">{FilterType}: </label>
            <select name={FilterType} id={FilterType}>
                <option value={dropDownOptions}>{dropDownOptions}</option>
                <option value={dropDownOptions}>{dropDownOptions}</option>
            </select>
            
        </div>);
    }
}

export default Filter