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
      searchQuery: "Soul",
      selectedBook: -1
    };
  }

  filterChange (type, value) {
    let state = {}
    state[type]=value
    
    this.setState(state, this.grabBook);
    
  }
 
  searchQueryChanged(e) {
    e.preventDefault();
    
    this.setState({
      searchQuery: e.target.search.value
    }, this.grabBook)
   
    
  }
  
  

  grabBook() {
    console.log(this.state.searchQuery)

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
        this.setState({
          books: data.items,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
    
  }


  selectBook(bookIndex) {
    this.setState({
      selectedBook: bookIndex
    }
    )
  }

 /* grabBook(printType, bookType, searchQuery) {
    this.setState({
      printType: "all",
      bookType: "No-Filter",
      searchQuery: "Soul",
    })
  }*/

  render(){

    const moreDetails =  this.state.selectedBook >= 0
    ? <MoreDetails 
      book={this.state.books[0]}
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
