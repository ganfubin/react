import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
//import MyComponent from './loopReact.js';//循环demo
var Demo=React.createClass({
	render:function(){
		React.Children.forEach(this.props.children,function(child){
			console.log(child);
		})
		return (
		<div>{this.props.name}</div>
			)
	}
})

render(<Demo name="frodo">
	<p key="p1">P1 content</p>
	<p key="p2">P2 content</p>
</Demo>,$("#app")[0]);
