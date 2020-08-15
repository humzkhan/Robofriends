import React, { Component } from 'react';
import Cardlist from './Cardlist';
import { robots } from './robots';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (e) => {
        this.setState({searchfield: e.target.value})
    }

    render(){
        const filterRobots = this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className = 'tc'>
                <h1 className = 'f2'>Robofriends</h1>
                <SearchBox sChange={this.onSearchChange}/>
                <Cardlist robots={ filterRobots }/>
            </div>
           
        );
    }
}

export default App;