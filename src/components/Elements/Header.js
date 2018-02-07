import React, {Component} from 'react'

export class Header extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header>
                <div className="center-wrapper">
                    <div id ="header-logo">
                        <a href="http://www.stockport.gov.uk">Stockport Metropolitan Borough Council Homepage</a>
                    </div>
                    <div id="header-my-account">
                        <a href="http://myaccount.stockport.gov.uk"><i className="fa fa-user" aria-hidden="true"></i>My Account</a>
                    </div>
                    <form method="get" role="search" id="cludo-search-form" className="cludo-search_autocomplete">
                        <fieldset className="input-group">
                            <legend>Search Stockport Gov website:</legend>
                            <label htmlFor="search" className="sr-only">Search</label>
                            <input id="search" className="search-input" name="query" placeholder="Search" autoComplete="off" type="text" />
                            <button type="submit" title="Search Stockport Gov website"><i className="fa fa-search" aria-hidden="true"></i></button>
                        </fieldset>
                    </form>
                </div>
                <div className="banner-header">
                    <div className="center-wrapper">
                        <span>NEW</span><strong>This part of Stockport.gov.uk is brand new</strong> &ndash; your <a href="/" target="_blank" data-mode="1" className="typeform-share link">feedback</a> will help us improve it.
                    </div>
                </div>
                <nav className="breadcrumb">
                    <h2 className="sr-only">Breadcrumb navigation</h2>
                    <ul className="center-wrapper">
                        <li><a href="http://myaccount.stockport.gov.uk">Home</a></li>
                        <li>Style guide</li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header