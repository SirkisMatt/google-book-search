import React, { Component } from "react";
import BookResult from '../BookResult/BookResult'
import './SearchResultList.css'

class SearchResultList extends Component {
    render() {
        
        console.log(this.props.books)

            const bookList = this
            .props
            .books
            .map((book, i) => <BookResult {...book} key={i}/>);
      
      return (
        <ul className="bookResultList">
          {bookList}
        </ul>
        )
    }
}

SearchResultList.defaultProps = {
    bookList: []
};

export default SearchResultList;
