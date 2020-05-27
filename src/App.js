import React from 'react';
import './App.css';
import {Wrapper} from './component/wrapper/wrapper'

class App extends  React.Component {
  constructor (){
    super();
    this.state = {
      transactions: []
    }
  }

  componentDidMount(){
    fetch(`http://demo2915657.mockable.io/transactions`)
    .then(response => response.json())
    .then(data => 
    this.setState({transactions: data.transactions})
      //console.log(data.transactions)
      );
  }

  render(){
    const {transactions} = this.state;
    return (
  <Wrapper transactions={transactions}/>
    )
  }
}

export default App;




// amount: "10"
// fromAccount: "account1"
// time: "2020-05-26T05:32:50.097Z"
// toAccount: "account2"
// transaction_id: 1