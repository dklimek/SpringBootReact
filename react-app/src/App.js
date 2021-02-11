
import React, {Component} from 'react';
import Film from "./Film";

class App extends Component {

  state =
  {
    data: [],
    name: "Klimek"
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/cassetts/all')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({data})
      }
    );
  }

  render() {
    return (
      <div>      
        {this.state.data.map(film => <Film info={film}/>)}
      </div>
    );
  }
  
  
}

export default App;
