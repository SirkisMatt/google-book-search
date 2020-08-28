import React, { Component } from "react";
import './BookResult.css'

class BookResult extends Component {
    render() {
        let price = ""
        if (this.props.saleInfo.saleability === "NOT_FOR_SALE") {
            price = "Currently not for Sale"
        } else {
             price = `Price: $${this.props.saleInfo.listPrice.amount} ${this.props.saleInfo.listPrice.currencyCode}`
        }
        

        let authors = ""
        if (this.props.volumeInfo.authors.length > 1) {
            let manyAuthors = this.props.volumeInfo.authors.map(author => " " + author).toString()
            authors = `Authors: ${manyAuthors}`
        } else {
            authors = `Author: ${this.props.volumeInfo.authors}`
        }
        
        
        let description = ""
        let text = this.props.volumeInfo.description
        if (text === undefined) {
            description = "No description available."
        }
        else if (text.length > 299) {
            description = text.slice(0, 300) + "..."
        } else {
            description = text
        }
        
        

        return (
            <li className="BookResult">
                <div className="column">
                    <img src={this.props.volumeInfo.imageLinks.thumbnail} alt="book cover" width="200px"/>
                </div>
                <ul className="column">
                    <h3>{this.props.volumeInfo.title}</h3>
                    <li>{authors}</li>
                    <br/>
                    <li>{price}</li>
                    <br/>
                    <li className="description">{description}</li>
                    <br/>
                    <button 
                    className="more-info"
                    onClick={e => this.props.selectBook(this.props.index)}
                    >
                    More Info
                    </button>
                </ul>
            </li>
        )
         
    }
}

export default BookResult