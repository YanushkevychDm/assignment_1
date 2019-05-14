import React from 'react';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends React.Component {
  state = {
    username: 'Dmytro'
  }

  onChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  render() {

    return (
      <div className='user'>
        <UserInput changed={this.onChangeHandler} username={this.state.username}/>
        <UserOutput username={this.state.username}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, obcaecati.
        </UserOutput>
        <UserOutput>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, explicabo sapiente eligendi porro voluptatem tempore vitae at doloribus assumenda aperiam aut saepe voluptatibus in nobis, autem accusamus vero maiores omnis.
        </UserOutput>
        <UserOutput>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, sapiente incidunt repudiandae sunt aspernatur labore!
        </UserOutput>
      </div>
    );
  }
  }

export default App;
