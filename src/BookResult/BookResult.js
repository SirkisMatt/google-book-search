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

        let text = ""
        if (this.props.searchInfo.textSnippet === undefined) {
            text = this.props.volumeInfo.description
        } else {
            text = this.props.searchInfo.textSnippet
        }
        //const wordLimit = 50
        //let textToLimit = this.props.volumeInfo.description
        
        /*function limitWords(textToLimit, wordLimit) {
            var finalText = “ ”;
            var text2 = textToLimit.replace(/\s+/g, ‘ ‘);
            var text3 = text2.split(‘ ‘);

            var numberOfWords = text3.length;

            var i=0;

            if(numberOfWords > wordLimit) {
            for(i=0; i< wordLimit; i++)
            finalText = finalText+” “+ text3[i]+” “;

            return finalText+”…”;
            }
            else return textToLimit;
            }*/
        

        return (
            <li className="BookResult">
                <div className="column">
                    <img src={this.props.volumeInfo.imageLinks.thumbnail} alt="book cover" width="200px"/>
                </div>
                <div className="column">
                    <h3>{this.props.volumeInfo.title}</h3>
                    <p>{authors}</p>
                    <p>{price}</p>
                    <p>{this.props.volumeInfo.description}</p>
                    <button 
                    className="more-info"
                    >
                    More Info
                    </button>
                </div>
            </li>
        )
         
    }
}

export default BookResult