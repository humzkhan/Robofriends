import React, { Component } from 'react';
import { connect } from 'react-redux'
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/Error Boundary';
import './App.css';
import Scroll from '../components/Scroll'
import { setSearchField, requestRobots } from '../action'

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component{

    componentDidMount(){
        this.props.onRequestRobots();
    }

    render(){
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filterRobots = robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return isPending ? <h1>Loading</h1> :
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