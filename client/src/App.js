import React, { Component } from 'react';
import './App.css';
import './basic.css';
import Menu from './menu/Menu.jsx';
import Content from './content/Content.jsx';

class App extends Component {
  state = {
    data:[],
    loaded: false,
    showModal: false,
    ids: [],
  }
  componentDidMount() {
    // fetch('/users')
    //   .then(res => res.json())
    //   .then(users => this.setState({users}))
  }
  /*
    Function that iterates over the data in order to get the type of each attribute
    @params data is the dataset and atts is the array with the atributtes names and types
    returns an array with the types of the attributes of the data
    also gets the attributte that is id
  */
  getAttributesType(data,atts,ids){
    let seq = "sequential";
    let cat = "categorical";
    let count = 0;     
    for(let prop in data[1]){
      let attr =data[1][prop];
      if(atts[count].name.includes("id") || atts[count].name.includes("key")){
        atts[count].id = true;
        ids.push(atts[count].name);
      }
      let notNumber = isNaN(attr)
      let isDate = this.isDate(attr);
      console.log(attr,!notNumber,isDate);
      if(!notNumber){
        atts[count].type = seq;
      }else if(isDate){
        atts[count].type = seq;
      }else {
         atts[count].type = cat;
      }
      count++;
    }
  
  }
  isDate(attr){
    var mydate = new Date(attr);
    if(isNaN(mydate.getDate())){
      return false;
    }
    return true;
  }
  setData(data){
    /*Creates an empty array that will contain the metadata of the attributes*/
    let atts = []
    let ids = []
    for (let prop in data[0]){
      let i = {};
      i.name = prop;
      i.checked = true;
      i.type = "";
      i.id = false;
      atts.push(i);
    }
    this.getAttributesType(data,atts,ids);
    this.setState({
      data: data,
      loaded: true,
      attributes: atts,
      ids: ids,
    })
  }
  setID(){
    console.log('setID');
  }
  setFile(file){
    console.log('setFile');
  }
  setAttribute(attrs){
    console.log('setatts');
  }
  updateCallback(callback){
    console.log('updateCallback',callback);
  }
  toggleModal = () => {
    console.log('toggleModal')
    this.setState({
      showModal: !this.state.showModal,
    })
  }
  
  getModal(){
    return (
      <div id="openModal" className="modalDialog">
        <div>
          <a href="#close" title="Close" className="close">X</a>
          <h2>Node Navigator</h2>
          <p>NodeNavigator is a d3.js visualization widget to help summarizing, browsing and navigating large data sets.</p>
        </div>
      </div>
    );
  }
  render() {
    return (
        <div>
        {
                  !this.state.showModal?
                  this.getModal()
                  : ''
        }
           <div className="container">
                <div className="header">
                    <div> <i className="far fa-compass"></i> </div>
                    <div>Node Navigator</div>
                    <div className="info"> <a href="#openModal">  <i className="fas fa-info-circle" ></i> </a></div>
                </div>

                <Menu/>
                
                <Content 
                  setData={this.setData.bind(this)} 
                  loaded={this.state.loaded} 
                  data={this.state.data} 
                  updateCallback={this.updateCallback.bind(this)}
                  attributes={this.state.attributes}
                  ids={this.state.ids}
                />
                
                <div className="footer"> <a href="https://github.com/jgmurillo10/thesis" target="_blank" rel="noopener noreferrer"> Github Project MIT License <i className="fab fa-github"></i> </a> </div>
            </div>
        </div>
    );
  }
}

export default App;