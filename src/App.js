import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './app.css';

class App extends Component {
    constructor() {    //constructor  creates this.
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
     }
    
 //Searchbox (type the name you want) 
 //onSearchChange lets the server know there is a change   
onSearchChange = (event) => {     
    this.setState({ searchfield: event.target.value })
}

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
    return (
        <div className='tc'>
            <h1>Robofriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>   
            <CardList robots={filteredRobots}/>
        </div>
    );
    }
}

export default App;