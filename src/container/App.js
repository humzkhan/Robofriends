import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll'

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
        const { robots, searchfield } = this.state;
        const filterRobots = robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return (robots.length === 0) ? <h1>Loading</h1> :
        (
            <div className = 'tc'>
                <h1 className = 'f2'>Robofriends</h1>
                <SearchBox sChange={this.onSearchChange}/>
                <Scroll>
                    <Cardlist robots={ filterRobots }/>
                </Scroll>   
            </div>
        )
    }
}

export default App;