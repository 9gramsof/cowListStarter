import React from 'react';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ''
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(event.target[0].value);
    console.log(event.target[1].value);
    let newCow = {
      name: event.target[0].value,
      description: event.target[1].value
    }
    this.props.onAdd(newCow);
  }

  render() {
    return (
      <div>
        <h3>Add a cow</h3>
        <form onSubmit={this.onSubmit}>
          Name:
          <input type="text" placeholder="ex. Princess"></input>
          Description:
          <input type="text" placeholder="ex. a happy California cow"></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    )
  }
}

export default Add;