import React, {Component} from 'react';
import axios from 'axios';


class App extends Component {
  state = {
      username: "",
      pwd: ""
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value,
    })
      console.log(this.state)
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const user = {
        username: this.state.username,
        pwd: this.state.pwd
    }

    axios.post('http://172.30.1.35:3001/register', user)
        .then(res =>{
          console.log(res.data)
        })
  }
  render(){
    return(
        <div>
          <form onSubmit={this.handleSubmit}>
              <label>
                id:<input type={"text"} name={"username"} onChange={this.handleChange}/>
              </label>
              <label>
                password:<input type={"password"} name={"pwd"} onChange={this.handleChange}/>
              </label>
            <button type={"submit"}>회원가입</button>
          </form>
        </div>
    )
  }
}

export default App;
