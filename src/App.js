import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

class App extends Component {

  constructor(props) {
    super(props);
    //introduce class constructor

    this.state = {
      list,
    };
    //state bound to class (this), can access local state in whole component
    //go from static list of items to list from local state
  }

  render() {
    return (
      <div className="App">
        {this.state.list.map(item => 
        //list is part of component now
        //do not mutate state directly, use setState()
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </div>
        )}
      </div>
    );
  }
}

export default App;

// components ? 
//internal component state pg 44