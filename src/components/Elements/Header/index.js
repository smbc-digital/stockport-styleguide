import React, { Component } from 'react'

class Header extends Component {

	constructor(props) {
		super(props)
	}

	onModalCheckboxChange(event) {
		document.body.classList = event.target.checked ? 'noscroll' : ''
	}

	render() {
		const { loggedIn } = this.props

		return (
			<header>
				<div className="skip-to-main-content hide-on-mobile hide-on-tablet">
					<a href="#content">Skip to main content</a>
				</div>
				<div className="center-wrapper">
					<div id="header-logo">
						<a href="http://www.stockport.gov.uk">Stockport Metropolitan Borough Council Homepage</a>
					</div>
					{loggedIn
						? <div id="header-my-account" className="logged-in">
							<div className='menu-container'>
								<div className='menu'>
									<p>Welcome User</p>
									<i className="fa fa-user" aria-hidden="true"></i>
									<a href="http://myaccount.stockport.gov.uk">My Account</a>
									<i className="fa fa-angle-down" aria-hidden="true"></i>
								</div>
								<nav className='menu-tooltip'>
									<i className="fa fa-caret-up" aria-hidden="true"></i>
									<a href="http://myaccount.stockport.gov.uk">My Account</a>
									<a href="http://myaccount.stockport.gov.uk">Account Settings</a>
									<a href="http://myaccount.stockport.gov.uk">Email alerts</a>
									<a href="http://myaccount.stockport.gov.uk">Sign out</a>
								</nav>
							</div>
							<div className='modal'>
								<input id='modal' type='checkbox' name='modal' tabIndex='1' onClick={this.onModalCheckboxChange.bind(this)} />
								<label htmlFor="modal">
									<i className="fa fa-user" aria-hidden="true"></i>
									<span className='hidden'>Open account menu</span>
								</label>
								<div className="modal-overlay">
									<label htmlFor="modal" className="button button-outline button-close button-overlay">
										<i className="fa fa-times" aria-hidden="true"></i>
										Close
									</label>
									<nav className="mobile-menu">
										<ul>
											<li><a href="http://myaccount.stockport.gov.uk">My Account</a></li>
											<li><a href="http://myaccount.stockport.gov.uk">Account settings</a></li>
											<li><a href="http://myaccount.stockport.gov.uk">Email alerts</a></li>
											<li><a href="http://myaccount.stockport.gov.uk">Sign out</a></li>
										</ul>
									</nav>
								</div>
							</div>
						</div>
						: <div id="header-my-account">
							<a href="http://myaccount.stockport.gov.uk"><i className="fa fa-user" aria-hidden="true"></i>My Account</a>
						</div>}
					<form method="get" role="search" id="cludo-search-form" className="cludo-search_autocomplete">
						<label htmlFor="search" className="sr-only">Search Stockport council website</label>
						<input id="search" className="search-input" name="query" placeholder="Search" autoComplete="off" type="text" />
						<button type="submit" title="Search Stockport Gov website"><i className="fa fa-search" aria-hidden="true"></i></button>
					</form>
					<div className="banner-header">
						<div className="center-wrapper">
							<span>NEW</span><strong>This part of Stockport.gov.uk is brand new</strong> &ndash; your <a href="/" target="_blank" data-mode="1" className="typeform-share link">feedback</a> will help us improve it.
						</div>
					</div>
					<nav className="breadcrumb">
						<h2 className="sr-only">Breadcrumb navigation</h2>
						<ul className="center-wrapper">
							<li><a href="/">Home</a></li>
						</ul>
					</nav>
				</div>
			</header>
		)
	}
}

export default Header