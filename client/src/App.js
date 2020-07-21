import React, {Component} from 'react';
import axios from 'axios';
import {saveAs} from 'file-saver';
import './App.css';

class App extends Component {

  state = {
    name: '',
    receiptId: 0,
    price1:0,
    price2:0,
  }

  handleChange = ({target: { value, name }}) => this.setState({ [name]: value });
  createAndDownloadPdf = () => {
    axios.post('/create-pdf', this.state);
  } 

  
render() {
  return (
    <div className="App">
      <input type="text" name="name" placeholder="name" onChange={this.handleChange}/>
      <input type="text" name="receiptId" placeholder="Receipt ID" onChange={this.handleChange}/>
      <input type="text" name="price1" placeholder="Price 1" onChange={this.handleChange}/>
      <input type="text" name="price2" placeholder="Price 2" onChange={this.handleChange}/>
      <button onClick={this.createAndDownloadPdf}>Download PDF</button>
    </div>
  );
}
}
export default App;
