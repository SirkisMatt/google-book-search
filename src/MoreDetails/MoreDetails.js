import React, {Component} from 'react';

class MoreDetails extends Component {
    static defaultProps = {
        book: {
            kind: "books#volume",
            id: "1qDuaC17yxAC",
           
            volumeInfo: {
              "title": "Real-Time Systems Design and Analysis",
              "authors": [
                "Phillip A. Laplante"
              ],
              
              description: "The leading guide to real-time systems design-revised andupdated This third edition of Phillip Laplante's bestselling, practicalguide to building real-time systems maintains its predecessors'unique holistic, systems-based approach devised to help engineerswrite problem-solving software. Dr. Laplante incorporates a surveyof related technologies and their histories, complete withtime-saving practical tips, hands-on instructions, C code, andinsights into decreasing ramp-up times. Real-Time Systems Design and Analysis, Third Edition is essentialfor students and practicing software engineers who want improveddesigns, faster computation, and ultimate cost savings. Chaptersdiscuss hardware considerations and software requirements, softwaresystems design, the software production process, performanceestimation and optimization, and engineering considerations. This new edition has been revised to include: * Up-to-date information on object-oriented technologies forreal-time including object-oriented analysis, design, and languagessuch as Java, C++, and C# * Coverage of significant developments in the field, such as: New life-cycle methodologies and advanced programming practices forreal-time, including Agile methodologies Analysis techniques for commercial real-time operating systemtechnology Hardware advances, including field-programmable gate arrays andmemory technology * Deeper coverage of: Scheduling and rate-monotonic theories Synchronization and communication techniques Software testing and metrics Real-Time Systems Design and Analysis, Third Edition remains anunmatched resource for students and practicing software engineerswho want improved designs, faster computation, and ultimate costsavings.",
          
             
              averageRating: 4,
              ratingsCount: 3,
              
              imageLinks: {
                smallThumbnail: "http://books.google.com/books/content?id=1qDuaC17yxAC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                thumbnail: "http://books.google.com/books/content?id=1qDuaC17yxAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
              },
 
            },
            saleInfo: {
              country: "NZ",
              saleability: "NOT_FOR_SALE",
              isEbook: false
            }
           
          }
    }
    render() {
        
        const book = this.props.book

        return (
            <div className="more-details">
                <div className="column">
                    <img src="this.props.thumbnail" alt="book cover" width="200px" />
                </div>
                <div className="column">
                    <h3>{book.volumeInfo.title}</h3>
                    <p>this.props.author</p>
                    <p>this.props.averageRating</p>
                    <p>this.props.ratingsCount</p>
                    <p>this.props.amount and currencyCode</p>
                    <button><a href="https://play.google.com/store/books/details?id=Kuy725kczicC&rdid=book-Kuy725kczicC&rdot=1&source=gbs_api" target="blank">Buy Now</a></button>
                    <p>this.props.description</p>
                    <button onClick={e => this.props.selectBook(-1)}>Go Back</button>
                </div>
            </div>
        )
    }
}

export default MoreDetails