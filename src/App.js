import React, { Component } from 'react';
import Cardlist from './Cardlist';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll'

class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    onSearchChange = (e) => {
        this.setState({searchfield: e.target.value})
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots:users}))
        
    }

    render(){
        const filterRobots = this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(this.state.robots.length === 0){
            return <h1>Loading</h1>
        }
        else{
            return (
                <div className = 'tc'>
                    <h1 className = 'f2'>Robofriends</h1>
                    <SearchBox sChange={this.onSearchChange}/>
                    <Scroll>
                        <Cardlist robots={ filterRobots }/>
                    </Scroll>   
                </div>
               
            );
        }
    }
}

export default App;