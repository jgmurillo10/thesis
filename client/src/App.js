import React, { Component } from 'react';
import './App.css';
import './basic.css';
import Menu from './menu/Menu.jsx';
import Content from './content/Content.jsx';

class App extends Component {
  state = {
    data:[],
    loaded: false,
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
  render() {
    return (
       <div className="container">
            <div className="header">
                <div> <i className="far fa-compass"></i> </div>
                <div>Node Navigator</div>
                <div className="info"><i className="fas fa-info-circle"></i></div>
            </div>

            <Menu/>
            
            <Content 
              setData={this.setData.bind(this)} 
              loaded={this.state.loaded} 
              data={this.state.data} 
              updateCallback={this.updateCallback.bind(this)}
              attributes={this.state.attributes}
            />
            
            <div className="footer">Github Project MIT License <i className="fab fa-github"></i> </div>
        </div>
    );
  }
}

export default App;