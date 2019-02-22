import React, {Component} from 'react'

export class Home extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<main className="full-width" id="content">
				<section className="title-container" aria-labelledby="welcome">
					<div className="title-content">
						<div className="title">
							<h1 id="welcome">Welcome to the Stockport.gov.uk style guide</h1>
							<p className="hide-on-mobile">Home to the Digital Team's shared styles and design patterns</p>
						</div>
					</div>
				</section>
				<section className="center-wrapper" aria-labelledby="lookingFor">
					<h2 className="hide-on-mobile" id="lookingFor">What are you looking for?</h2>
					<ul className="inline-navigation">
						<li><a href="/colours"><span className="nav-icon si-pallet"></span><span className="nav-text">Colours</span></a></li>
						<li><a href="/typography"><span className="nav-icon si-stationary"></span><span className="nav-text">Typography</span></a></li>
						<li><a href="/navigation"><span className="nav-icon si-car"></span><span className="nav-text">Navigation</span></a></li>
						<li><a href="/buttons"><span className="nav-icon si-pointing-hand"></span><span className="nav-text">Buttons</span></a></li>
						<li><a href="/form-elements"><span className="nav-icon si-clipboard-pencil"></span><span className="nav-text">Form Elements</span></a></li>
						<li><a href="/alerts"><span className="nav-icon si-exclamation-mark"></span><span className="nav-text">Alerts</span></a></li>
						<li><a href="/inform-alerts"><span className="nav-icon fa fa-exclamation-circle"></span><span className="nav-text">In-form alerts</span></a></li>
						<li><a href="/tables"><span className="nav-icon si-data-table"></span><span className="nav-text">Tables</span></a></li>
						<li><a href="/profiles"><span className="nav-icon si-person"></span><span className="nav-text">Profiles</span></a></li>
						<li><a href="/icons"><span className="nav-icon si-colin"></span><span className="nav-text">Icons</span></a></li>
						<li><a href="/promotions"><span className="nav-icon si-microphone"></span><span className="nav-text">Promotions</span></a></li>
						<li><a href="/headers"><span className="nav-icon fa fa-columns"></span><span className="nav-text">Headers</span></a></li>
					</ul>
				</section>
			</main>
		)
	}
}

export default Home