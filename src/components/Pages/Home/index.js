import React, {Component} from 'react'

export class Home extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<main className="full-width" id="content">
				<section className="title-container">
					<div className="title">
						<h1>Welcome to the Stockport.gov.uk style guide</h1>
						<p className="hide-on-mobile">Home to the Digital Team's shared styles and design patterns</p>
					</div>
				</section>
				<section className="center-wrapper">
					<h2 className="hide-on-mobile">What are you looking for?</h2>
					<ul className="inline-navigation">
						<li><a href="/colours"><i className="si-pallet"></i><span>Colours</span></a></li>
						<li><a href="/typography"><i className="si-stationary"></i><span>Typography</span></a></li>
						<li><a href="/navigation"><i className="si-car"></i><span>Navigation</span></a></li>
						<li><a href="/buttons"><i className="si-pointing-hand"></i><span>Buttons</span></a></li>
						<li><a href="/form-elements"><i className="si-clipboard-pencil"></i><span>Form Elements</span></a></li>
						<li><a href="/alerts"><i className="si-exclamation-mark"></i><span>Alerts</span></a></li>
						<li><a href="/tables"><i className="si-data-table"></i><span>Tables</span></a></li>
						<li><a href="/profiles"><i className="si-person"></i><span>Profiles</span></a></li>
						<li><a href="/icons"><i className="si-colin"></i><span>Icons</span></a></li>
						<li><a href="/promotions"><i className="si-microphone"></i><span>Promotions</span></a></li>
						<li><a href="/headers"><i className="fa fa-columns"></i><span>Headers</span></a></li>
					</ul>
				</section>
			</main>
		)
	}
}

export default Home