import React, { Component } from 'react'
import Aside from '../../Elements/Aside'
import IconBoxes from '../../Elements/IconBoxes'

class Icons extends Component{
	constructor(props){
		super(props)
		this.icons = [
			{
				'Name': 'Basket',
				'Class': 'si-basket'
			},
			{
				'Name': 'Bin',
				'Class': 'si-bin'
			},
			{
				'Name': 'Book',
				'Class': 'si-book'
			},
			{
				'Name': 'Books',
				'Class': 'si-books'
			}
		]
	}

	render(){
		return (
			<main id="content">
				<article className="with-aside">
					<section>
						<h1>Icons</h1>
						<p>We use two different icon sets throughout the council website.</p>
						<p>One set features prominently on the homepage, which is known as Line Art. This is a predefined set of icons that can be manipulated through the Creative Commons licence.</p>
						<p>We also use <a href="http://fontawesome.io/">Font Awesome</a>, which is a vast icon set that is used by many different websites across the web. These icons are used in less prominent positions within the site.</p>
					</section>
					<section>
						<h2>Line art icons</h2>
						<IconBoxes icons={this.icons}/>
					</section>
				</article>
				<Aside/>
			</main>
		) 
	} 
}

export default Icons