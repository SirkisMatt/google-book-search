import React,{Component} from 'react';
import './App.css';
import SearchAndFilter from './SearchAndFilter/SearchAndFilter';
import SearchResultList from './SearchResultList/SearchResultList'
import MoreDetails from './MoreDetails/MoreDetails'

const bookList = [
{
title: "Wild Mind",
author: "Bill Plotkin",
listPrice: 31.57,
textSnippet: "Wild Mind identifies these resources — which Bill Plotkin calls the four facets of the Self, or the four dimensions of our innate human wholeness — and also the four sets of fragmented or wounded subpersonalities that form during ...",
thumbnail: "http://books.google.com/books/content?id=OczmHOQi5zsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
},
{
  title: "Soul Craft",
  author: "Bill Plotkin",
  listPrice: 31.57,
  textSnippet: "Since 1980, depth psychologist Bill Plotkin has been guiding women and men into the wilderness — the redrock canyons and snow-crested mountains of the American West — but also into the wilds of the soul. He calls this work soulcraft.",
  thumbnail: "http://books.google.com/books/content?id=Kuy725kczicC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
}
];
const apiKey = "AIzaSyBJWaxPt7SR0fRiUpoBMZY-lT_Ifqskg_A"

class App extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      printType: "all",
      bookType: "No-Filter",
      searchQuery: "Soul Craft"
    };
  }
 
  

  componentDidMount() {
    this._isMounted = true;

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

  componentWillUnmount() {
    this._isMounted = false;
  }

  render(){

    
    return (
      <div className="App">
        <header className="App-header">
          <h1>Google Book Search</h1>
          <SearchAndFilter />
        </header>
        <main>
          <SearchResultList 
            bookList={bookList}
            books={this.state.books}
          />
          <MoreDetails />
        </main>
      </div>
    );
  }
}

export default App;
