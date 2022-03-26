import React from 'react';
import ReactDOM from 'react-dom';
import Add from './components/Add.jsx'
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: [],
      displayCow: false,
      name: '',
      description: ''
    }
    this.onAdd = this.onAdd.bind(this);
    this.getAll = this.getAll.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  getAll() {
    axios.get('/cowlist')
    .then(res => {
      console.log(res.data);
      this.setState({cows: res.data})
    })
    .catch(err => {
      console.log(err);
    })
  }

  componentDidMount() {
    this.getAll();
  }

  onAdd(newCow) {
    axios({
      method: 'post',
      url: '/cowlist',
      data: {
        name: newCow.name,
        description: newCow.description
      }
    })
    .then(res => {
      console.log(res);
      this.getAll();
    })
    .catch(err => {
      console.log(err);
    })
  }

  onClick(event) {
    this.setState({
      displayCow: !this.state.displayCow,
      name: event.target.name,
      description: event.target.value
    });
  }


  render() {
    let displayCow = this.state.displayCow;
    let display;
    if (displayCow) {
      display =
      <div>
        <h2>You chose this cow:</h2>
        <h3>{this.state.name} : {this.state.description} </h3>
      </div>
    }


    return(
      <div>
        <h1>Cowlist!</h1>
        <div>
          {display}
        </div>
        <Add onAdd={this.onAdd}/>
        <ul>
          {this.state.cows.map(cow => (
            <li >
              {cow.name}
              <button name={cow.name} value={cow.description} onClick={this.onClick}> pick me! </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }


}


ReactDOM.render(<App/>, document.getElementById('app'));