import React, { Component } from 'react';
import { connect } from 'react-redux'
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/Error Boundary';
import './App.css';
import Scroll from '../components/Scroll'
import { setSearchField } from '../action'

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: []
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots:users}))
        
    }

    render(){
        const { robots } = this.state;
        const { searchField, onSearchChange } = this.props;
        const filterRobots = robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return (robots.length === 0) ? <h1>Loading</h1> :
        (
            <div className = 'tc'>
                <h1 className = 'f2'>Robofriends</h1>
                <SearchBox sChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <Cardlist robots={ filterRobots }/>
                    </ErrorBoundry>
                </Scroll>   
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);