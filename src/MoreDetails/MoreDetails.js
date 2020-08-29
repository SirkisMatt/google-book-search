import React, {Component} from 'react';

class MoreDetails extends Component {
    static defaultProps = {
        book: {},
        bookCover: "",
        title: "",
        averageRating: 0,
        description: "",
        buyLink: ""
         
    }
    render() {

        const book = this.props.book
       
        

        return (
            <div className="more-details">
                <div className="column">
                    <img src={book.bookCover} alt="book cover" width="200px" />
                </div>
                <div className="column">
                    <h3>{book.title}</h3>
                    <p>{book.authors}</p>
                    <p>{book.averageRating}</p>
                    <p>{book.price}</p>
                    <p>{book.description}</p>
                    <button><a href={book.buyLink} target="blank">Buy Now</a></button>
                    <button onClick={e => this.props.selectBook(-1)}>Go Back</button>
                </div>
            </div>
        )
    }
}

export default MoreDetails

