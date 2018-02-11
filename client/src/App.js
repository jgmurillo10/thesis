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
  }
  componentDidMount() {
    // fetch('/users')
    //   .then(res => res.json())
    //   .then(users => this.setState({users}))
  }
  setData(data){
    let atts = []
    let seq = "sequential";
    let cat = "categorical";
    for (let prop in data[0]){
      let i = {};
      i.name = prop;
      i.checked = true;
      atts.push(i);
    }
    console.log(atts);
    let count = 0;
    /**
    Array that loops over the element 1 of the data and guess the type of value of the attribute
    **/
    for (let prop in data[1]){
      let attrib = data[1][prop]
      if (typeof attrib === "string"){
        let conversion = Number(attrib);
        if (isNaN(conversion)){
          atts[count].type = cat;
          console.log('if',attrib,conversion,count);
        }else{
          console.log('else',attrib,conversion,count);
          atts[count].type = seq;
        }
      }else {
        console.log('outer else',attrib,count);
        atts[count].type = seq;
      }

      count = count+1;
    } 
     console.log(atts)
    this.setState({
      data: data,
      loaded: true,
      attributes: atts,
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
                />
                
                <div className="footer"> <a href="https://github.com/jgmurillo10/thesis" target="_blank" rel="noopener noreferrer"> Github Project MIT License <i className="fab fa-github"></i> </a> </div>
            </div>
        </div>
    );
  }
}

export default App;