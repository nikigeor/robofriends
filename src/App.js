import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import { robots } from './robots';
import './App.css';
import { setSearchField } from './actions';

const mapStateToProps = state => {
	return {
		searchField: state.searchField
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (e) => dispatch(setSearchField(e.target.value))
	}
}
class App extends Component {
    constructor() {    //constructor  creates this.
        super()
        this.state = {
            robots: robots
        }
     }

		 componentDidMount() {
			 fetch('https://jsonplaceholder.typicode.com/users')
			 	.then(response=> response.json())
				.then(users => {this.setState({ robots: users })});
		 }
    
 //Searchbox (type the name you want) 
 //onSearchChange lets the server know there is a change   
// onSearchChange = (event) => {     
//     this.setState({ searchfield: event.target.value })
// }

    render() {
				const { robots } = this.state;
				const { searchField, onSearchChange } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
    return !robots.length ?
		<h1>Loading</h1> :
		(
        <div className='tc'>
            <h1>Robofriends</h1>
            <SearchBox searchChange={onSearchChange}/>   
            <CardList robots={filteredRobots}/>
        </div>
    );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);