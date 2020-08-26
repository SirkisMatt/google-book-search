import React, { Component } from "react";
import BookResult from '../BookResult/BookResult'

class SearchResultList extends Component {
    render() {
        console.log(this.props.bookList)

            const bookList = this
            .props
            .bookList
            .map((book, i) => <BookResult { ...book } key={i}/>);
      
      return (
        <div className="bookResultList">
          {bookList}
        </div>
        )
    }
}

export default SearchResultList;
