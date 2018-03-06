import React, { Component } from 'react'
import Aside from '../../Elements/Aside'


class Promotions extends Component{
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<main>
				<article className="with-aside">
					<section>
						<h1>Promotions</h1>
						<p>We use promotions to to promote different sections of our website.</p>
					</section >
					<div className='promotion-container'>
						<h2>Manage your Council Tax in one place</h2>
						<p>You can continue to use My Account to view your previous and outstanding payments as well as your final bills.</p>
						<a href="#" className='button button-secondary'>Go to MyAccount</a>
					</div>
				</article>
				<Aside/>
			</main>
		)
	}
}

export default Promotions