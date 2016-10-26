import React from 'react';
import $ from 'jquery';
export default class MyComponent extends React.Component{
	constructor(){
		super();
		this.state={
			userInfo:[
			{"name":"map方式循环"}
			]
		};
		this.mapFor=this.mapFor.bind(this);
	}
	mapFor(){
		var This=this;
		$.ajax({
		url: '/static/ajaxRespone.json',
		type: 'GET'
	})
	.done(function(response) {
		var userInfo=response.userInfo;
		
		This.setState({
			userInfo:userInfo
		})

	});
	}
	render(){
		var element=[];
		for(var i=0;i<3;i++){
			element.push(<li className="list-group-item">测试样式{i}</li>)
		};
		return (
			<div className="container">
				<input type="button" className="btn btn-success" value="map方式循环" onClick={this.mapFor}/>
				<ul className="list-group">
				   {
				   	 this.state.userInfo.map(function(item,index){
				   	 	return <li className="list-group-item" key={index}>{item.name}</li>
				   	 })

				   }
					
				</ul>
				<input type="button" className="btn btn-primary" value="for方式循环" />
				<ul className="list-group">
					{element}
				</ul>
			</div>
			)
	}
}
