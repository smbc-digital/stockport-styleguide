import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import NavItem  from '../NavItem'

class Aside extends Component{
	constructor(props){
		super(props)
		this.routesCount = 0
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
			},
			{
				name: 'Promotions',
				route: '/promotions'
			},
			{
				name: 'Headers',
				route: '/headers'
			},
			{
				name: 'Success',
				route: '/success'
			}
		]
		this.state = {
			showFullMenu: false
		}
	}

	onClick() {
		this.setState({
			showFullMenu: !this.state.showFullMenu
		})
	}

	render(){
		return (
			<aside className="article-aside">
				<h2>Style guide</h2>
				<nav>
					<ul>
						{this.routes.map((route, index) => {
							if (index < 6)
								return(
									<NavItem to={route.route} key={index} name={route.name}/>
								)
							else
								return(
									<NavItem to={route.route} key={index} name={route.name} className={this.state.showFullMenu ? '' : 'hidden'}/>
								)
						})}
						{this.routes.length > 6 &&
							<li>
								<a href="#" onClick={this.onClick.bind(this)}>{this.state.showFullMenu ? 'Less' : 'More'}</a>
							</li>
						}
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