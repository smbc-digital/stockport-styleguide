import React, { Component } from 'react'

class Header extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		const { javascriptBanner } = this.props

		return (
			<header>
				<div className="skip-to-main-content hide-on-mobile hide-on-tablet">
					<a href="#content">Skip to main content</a>
				</div>
				<div className="center-wrapper">
					<div id="header-logo">
						<a href="http://www.stockport.gov.uk">Stockport Metropolitan Borough Council Homepage</a>
					</div>
				</div>
				{ javascriptBanner 
					? <div className="banner-header javascript-error">
						<div className="center-wrapper">
							<span>JavaScript off</span>To get the best experience on this website please use a browser with JavaScript enabled.
						</div>
					</div> : null}
				<nav className="breadcrumb">
					<h2 className="sr-only">Breadcrumb navigation</h2>
					<ul className="center-wrapper">
						<li><a href="/">Home</a></li>
					</ul>
				</nav>
			</header>
		)
	}
}

export default Header