import React, { Component } from 'react'

class Header extends Component {

	constructor(props) {
		super(props)

		this.state = {
			styleSheet: '/styles.min.css'
		}
	}

	onStyleSheetChange(event) {

		this.setState({
			styleSheet: event.target.value
		})
	}

	onModalCheckboxChange(event) {
		document.body.classList = event.target.checked ? 'noscroll' : ''
	}

	render() {
		const { loggedIn, javascriptBanner, uniqueKey  } = this.props

		return (
			<header>
				<link rel="stylesheet" href={this.state.styleSheet}></link>
				<div className="skip-to-main-content hide-on-mobile hide-on-tablet">
					<a href="#content">Skip to main content</a>
				</div>
				<div className="center-wrapper">
					<div id="header-logo">
						<a href="http://www.stockport.gov.uk">Stockport Metropolitan Borough Council Homepage</a>
					</div>
					<input id={uniqueKey ? `search-mobile-checkbox-${uniqueKey}` : 'search-mobile-checkbox'} type='checkbox' name='search-mobile-checkbox' tabIndex='1' />
					<label className='search-mobile-label' htmlFor={uniqueKey ? `search-mobile-checkbox-${uniqueKey}` : 'search-mobile-checkbox'}>
						<i className="fa fa-search" aria-hidden="true"></i>
						<span className='hidden'>Open search bar</span>
					</label>
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
									<nav>
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
						: <div id="header-my-account" style={{padding: '16px 12px 0'}}>
							<label htmlFor="lang" className="sr-only">Version selection</label>
							<select id="lang" onChange={this.onStyleSheetChange.bind(this)} value={this.state.value} style={{marginBottom: '0'}}>
								<option value="/styles.min.css">Local</option>
								<option value="https://s3-eu-west-1.amazonaws.com/smbc-react-assets/int/styleguide/styles.min.css">Remote v1 / Version 2</option>
								<option value="https://s3-eu-west-1.amazonaws.com/smbc-react-assets/int/styleguide/v2/styles.min.css">Remote v2 / Verison 2.2</option>
							</select>
						</div>}
					<form method="get" role="search" id="cludo-search-form" className="cludo-search_autocomplete">
						<label htmlFor="search" className="sr-only">Search Stockport council website</label>
						<input id="search" className="search-input" name="query" placeholder="Search" autoComplete="off" type="text" />
						<button type="submit" title="Search Stockport Gov website"><i className="fa fa-search" aria-hidden="true"></i></button>
					</form>
					<form method="get" role="search" id="cludo-search-mobile-form" className="cludo-search_autocomplete">
						<i className="fa fa-caret-up" aria-hidden="true"></i>
						<label htmlFor="search-mobile" className="sr-only">Search Stockport council website</label>
						<input id="search-mobile" className="search-input" name="query" placeholder="Hi there! What are you looking for?" autoComplete="off" type="text" />
						<button type="submit" title="Search Stockport Gov website"><i className="fa fa-search" aria-hidden="true"></i></button>
					</form>
				</div>
				{ javascriptBanner 
					? <div className="banner-header javascript-error">
						<div className="center-wrapper">
							<span>JavaScript off</span>To get the best experience on this website please use a browser with JavaScript enabled.
						</div>
					</div> : null}
				<div className="banner-header">
					<div className="center-wrapper">
						<span>NEW</span><strong>This part of Stockport.gov.uk is brand new</strong> &ndash; your <a href="/" target="_blank" data-mode="1" className="typeform-share link">feedback</a> will help us improve it.
					</div>
				</div>
				<nav className="breadcrumb" aria-label="Breadcrumb navigation">
					<ul className="center-wrapper">
						<li><a href="/">Home</a></li>
					</ul>
				</nav>
			</header>
		)
	}
}

export default Header