import React,{Component,PropTypes} from 'react';
export default class TabContent extends Component{
	constructor(props){
		super(props);
	}
	getTabPanes(){
		const {classPrefix,activeIndex,panels,isActive}=this.props;
		return React.Children.map(panels,(child)=>{
			if(!child){return;}

			const order=parseInt(child.props.order,10);
			const isActive=activeIndex===order;
			return React.cloneElement(child,{
				classPrefix,
				isActive,
				children:child.props.children,
				key:`tabpane-${order}`
			})
		})
	}
	

}
