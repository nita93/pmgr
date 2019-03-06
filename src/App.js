import React, {Component} from 'react';
import SearchRobots from './SearchRobots';
import CardList from './CardList';
import Scroll from './Scroll';

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }
    
// source https://jsonplaceholder.typicode.com/users
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(robots => this.setState({ robots }));
    }

    onSearchAction = (event) => {
        this.setState({searchField: event.target.value});
    }

    render(){
        const filteredRobots = this.state.robots.filter(
            robot => {
                return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
            }
        )
        return (
            <div className="content">
                <h1>RoboFriends</h1>
                <SearchRobots searchValueChange={this.onSearchAction}/>
                <hr />
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        );
    }
}

export default App;
