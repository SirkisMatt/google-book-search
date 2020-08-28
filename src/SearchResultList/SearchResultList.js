import React, { Component } from "react";
import BookResult from '../BookResult/BookResult'
import './SearchResultList.css'

class SearchResultList extends Component {
    render() {
        
        

            const bookList = this
            .props
            .books
            .map((book, i) => <BookResult 
            {...book} 
            key={i}
            index={i}
            selectBook={select => this.props.selectBook(select)}
            />);
            

            if (this.props.error !== null) {
                return (
                    <div>
                        <p>{this.props.error}</p>
                    </div>
                )
            } else { 
                return (
                    <ul className="bookResultList">
                        {bookList}
                    </ul>
                )
              }
    }
}

SearchResultList.defaultProps = {
    bookList: []
};

export default SearchResultList;
