import React, { Component } from "react";
import './BookResult.css'

class BookResult extends Component {
    static defaultProps = {
       bookCover: "",
       title: "",
       price: "",
       authors: "",
       description: ""
    }
    
    render() {
    

        return (
            <li className="BookResult">
                <div className="column">
                    <img src={this.props.bookCover} alt="book cover" width="200px"/>
                </div>
                <ul className="column">
                    <h3>{this.props.title}</h3>
                    <li>{this.props.authors}</li>
                    <br/>
                    <li>{this.props.price}</li>
                    <br/>
                    <li className="description">{(this.props.description.length > 299) ? this.props.description.slice(0, 300) + "..." : this.props.description}</li>
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