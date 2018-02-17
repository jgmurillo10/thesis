import React, { Component } from 'react';

class Menu extends Component {
	clickAtt(i){
		console.log(i,'i')
		let attributes = this.props.attributes;
		let va=!attributes[i].check;
		attributes[i].checked=va
		console.log(attributes)
		this.props.setAttributes(attributes);
	}
	render(){
		return(
			<div className="menu">
				<div className="attributes">
					<p>ID</p>
					<div className="attributes-container">
					{
						this.props.ids.map((d,i)=>{
							return (<button className="attribute" key={i}>{d}</button>)
						})
					}

					</div>

				</div>
				<div className="attributes">
					<p>Attributes</p>
					<div className="attributes-container">
					{
						this.props.attributes.map((d,i)=>{
							return (<button className="attribute" onClick={this.clickAtt.bind(this,i)} key={i}>{d.name}</button>)
						})
					}
					</div>
				</div>
			</div>
		)
	}
}
export default Menu;