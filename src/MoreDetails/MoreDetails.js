import React, {Component} from 'react';

class MoreDetails extends Component {
    render() {
        return (
            <div className="more-details">
                <div className="column">
                    <img src="this.props.thumbnail" alt="book cover" width="200px" />
                </div>
                <div className="column">
                    <h3>this.props.title</h3>
                    <p>this.props.author</p>
                    <p>this.props.averageRating</p>
                    <p>this.props.ratingsCount</p>
                    <p>this.props.amount and currencyCode</p>
                    <button><a href="https://play.google.com/store/books/details?id=Kuy725kczicC&rdid=book-Kuy725kczicC&rdot=1&source=gbs_api" target="blank">Buy Now</a></button>
                    <p>this.props.description</p>
                </div>
            </div>
        )
    }
}

export default MoreDetails