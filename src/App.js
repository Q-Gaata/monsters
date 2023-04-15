import { Component } from 'react';
import Cardlist from './components/card-list/card-list.component';
import SearchBar from './components/searchbar/search-bar.component';
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state = {
      // Initial state (for instance when it's not able to fetch anything)
      monsters : [],
      searchField: ''
    }
  }

  // after/if component renders/mounts, we want to fetch and render
  // we use a component lifecycle method
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users') // Gives back a Promise
    .then(response => response.json()) //Convert to JSON
    .then(users => this.setState(
      () => {
      return {monsters: users}
    }
    ))
  }

  onSearchField = (e) => {
    const searchField = e.target.value.toLowerCase()

    this.setState(() => {
      return {searchField}
    })

  }

  render(){

    // For Optimization (speed)
    const { monsters, searchField } = this.state;
    const { onSearchField } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField)
     });

    return (
      <div className="App">
        <h1 className='title'>Monsters Rolodex</h1>
        <SearchBar onChangeHandler= {onSearchField} placeholder='search monsters' className='monster-search-box' />
        <Cardlist monsters = {filteredMonsters} />
      </div>
    );
  }
  
}

export default App;
