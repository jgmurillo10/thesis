import React, { Component } from 'react';
import PropTypes from "prop-types";
import NodeNavigator from "./NodeNavigator.js";
// let d3 = require("d3");
const cat = "categorical";
class Visualization extends Component {


	componentDidMount() {
    console.log("NodeNavigatorComponent did mount");
    this.nn = new NodeNavigator(this.target, 600)
      .id(this.props.id)
      .updateCallback(this.props.updateCallback);
      this.props.attributes.map((d,i)=>{
        if(d.checked)
        console.log(this.props.data[0]);

          if(d.type === cat){
            console.log('cat',d.name);
            this.nn.addCategoricalAttrib(d.name);
          }if (d.name.includes( "Timestamp")||d.name.includes("date") ){
            console.log('seq',d.name);
            this.nn.addSequentialAttrib(d.name);
          }else {
          	this.nn.addCategoricalAttrib(d.name);
          }

      })

    if (this.props.data) {
      this.nn.data(this.props.data);
    }
  }

	render(){
		return(
			<div
	          className="visualization"
	          ref={(target) => this.target = target }>
	        </div>
		)
	}
}
Visualization.propTypes = {
  data: PropTypes.array.isRequired,
  updateCallback: PropTypes.func.isRequired
};
export default Visualization;