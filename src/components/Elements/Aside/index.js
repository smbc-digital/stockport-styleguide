import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import NavItem  from '../NavItem'

class Aside extends Component{
	constructor(props){
		super(props)
		this.routes = [
			{
				name: 'Colours',
				route: '/colours'
			},
			{
				name: 'Typography',
				route: '/typography'
			},
			{
				name: 'Buttons',
				route: '/buttons'
			},
			{
				name: 'Form Elements',
				route: '/form-elements'
			},
			{
				name: 'Alerts',
				route: '/alerts'
			},
			{
				name: 'Tables',
				route: '/tables'
			},
			{
				name: 'Profiles',
				route: '/profiles'
			},
			{
				name: 'Icons',
				route: '/icons'
			}
		]
	}

	render(){
		return (
			<aside className="article-aside">
				<h2>Style guide</h2>
				<nav>
					<ul>
						{this.routes.map((route, index) => {
							return(
								<NavItem to={route.route} key={index} name={route.name}/>
							)
						})}
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
					</ul>
				</nav>
			</aside>
		) 
	} 
}

export default Aside