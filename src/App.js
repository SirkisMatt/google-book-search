import React,{Component} from 'react';
import './App.css';
import SearchAndFilter from './SearchAndFilter/SearchAndFilter';
import SearchResultList from './SearchResultList/SearchResultList'
import MoreDetails from './MoreDetails/MoreDetails'


const apiKey = "AIzaSyBJWaxPt7SR0fRiUpoBMZY-lT_Ifqskg_A"

class App extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      error: null,
      printType: "all",
      bookType: "No-Filter",
      searchQuery: "",
      selectedBook: -1
    };
  }

  filterChange (type, value) {
    let state = {}
    state[type]=value
    
    this.setState(state, () => {if (this.state.searchQuery !== "") this.grabBook()});
    
  }
 
  searchQueryChanged(e) {
    e.preventDefault();
    
    this.setState({
      searchQuery: e.target.search.value
    }, this.grabBook)
  }
  
  

  grabBook() {
   

    let url = ``
    if (this.state.bookType === "No-Filter") {
      url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchQuery}&printType=${this.state.printType}&key=${apiKey}`
    } else {
      url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchQuery}&filter=${this.state.bookType}&printType=${this.state.printType}&key=${apiKey}`
    }
    fetch(url)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.handleResponse(data)
      }
      )
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  handleResponse(data) {
    this.setState({
      books: data.items.map(book => {
        return {
          title: book.volumeInfo.title,
          author: (book.volumeInfo.authors) ? (book.volumeInfo.authors.length > 1) ? "Authors: " + book.volumeInfo.authors.join(" ") : "Author: " + book.volumeInfo.authors[0] : "Unknown Author",
          bookCover: book.volumeInfo.imageLinks.thumbnail,
          price: (book.saleInfo.saleability === "NOT_FOR_SALE") ? "Currently not for Sale" : (book.saleInfo.saleability === "FREE") ? "Free" : `Price: $${book.saleInfo.listPrice.amount} ${book.saleInfo.listPrice.currencyCode}`,
          description: book.volumeInfo.description,
          averageRating: (book.volumeInfo.averageRating) ? book.volumeInfo.averageRating : "No Rating Available",
          buyLink: (book.saleInfo.buyLink ) ? book.saleInfo.buyLink : "#"
        }
      }),
      error: null
    });
  }
  


  /* this.setState({
          books: data.items,
          error: null
        }); */


  selectBook(bookIndex) {
    this.setState({
      selectedBook: bookIndex
    }
    )
  }


  render(){

    const moreDetails =  this.state.selectedBook >= 0
    ? <MoreDetails 
      book={this.state.books[`${this.state.selectedBook}`]}
      selectBook={select => this.selectBook(select)}
      />
    : <SearchResultList 
      error={this.state.error}
      books={this.state.books}
      selectBook={select => this.selectBook(select)}
      />
    
    return (
      <div className="App">
        <header className="App-header">
          <h1>Google Book Search</h1>
          <SearchAndFilter 
          
          filterChange={(type, value) => this.filterChange(type, value)}
          searchQueryChanged={e => this.searchQueryChanged(e)}
          />
        </header>
        <main>
         {moreDetails}
        </main>
      </div>
    );
  }
}

export default App;
