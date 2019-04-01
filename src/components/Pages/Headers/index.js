import React, { Component } from 'react'
import Header from '../../Elements/Header'
import Aside from '../../Elements/Aside'

class Headers extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<main id="content">
				<article className="with-aside">
					<h1>Headers</h1>
					<h2>Header with logged out state</h2>
					<div className='header-showcase'>
						<Header uniqueKey={1}/>
					</div>
					<h2>Header with logged in state</h2>
					<div className='header-showcase'>
						<Header
							loggedIn
							uniqueKey={2}
						/>
					</div>
					<h2>Header with javascript disabled</h2>
					<div className='header-showcase'>
						<Header
							loggedIn javascriptBanner
							uniqueKey={3}
						/>
					</div>
				</article>
				<Aside />
			</main>
		)
	}
}

export default Headers