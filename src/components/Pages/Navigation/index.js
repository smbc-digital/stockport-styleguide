import React, { Component } from 'react'
import Aside from '../../Elements/Aside'

class Navigation extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return (
			<main id="content">
				<article className="with-aside button-display">
					<h1>Navigation</h1>
					<section>
						<h2>Pagination</h2>
						<div className="pagination-container">
							<div className="pagination-previous">
								<a href="#">
									<i className="fa fa-angle-left fa-3x" aria-hidden="true"></i>
									<div>
										<p className="no-margin-bottom">Previous page</p>
										<p className="no-margin-bottom">Secondary schools</p>
									</div>
								</a>
							</div>
							<div className="pagination-next">
								<a href="#">
									<div>
										<p className="no-margin-bottom">Next page</p>
										<p className="no-margin-bottom">Secondary schools</p>
									</div>
									<i className="fa fa-angle-right fa-3x" aria-hidden="true"></i>
								</a>
							</div>
						</div>
					</section>
					<section>
						<h2>Pagination - Right side only</h2>
						<div className="pagination-container">
							<div className="pagination-previous">
							</div>
							<div className="pagination-next">
								<a href="#">
									<div>
										<p className="no-margin-bottom">Next page</p>
										<p className="no-margin-bottom">Secondary schools</p>
									</div>
									<i className="fa fa-angle-right fa-3x" aria-hidden="true"></i>
								</a>
							</div>
						</div>
					</section>
					<section>
						<h2>Pagination - Left side only</h2>
						<div className="pagination-container">
							<div className="pagination-previous">
								<a href="#">
									<i className="fa fa-angle-left fa-3x" aria-hidden="true"></i>
									<div>
										<p className="no-margin-bottom">Previous page</p>
										<p className="no-margin-bottom">Secondary schools</p>
									</div>
								</a>
							</div>
							<div className="pagination-next">
							</div>
						</div>
					</section>
					<section>
						<h2>Naviagation ordered list with current active</h2>
						<ol>
							<li>
								<a href="#">Primary schools</a>
							</li>
							<li className="nav-active">
								<a href="#">Secondary schools</a>
							</li>
							<li>
								<a href="#">Secondary schools</a>
							</li>
							<li>
								<a href="#">Secondary schools</a>
							</li>
						</ol>
					</section>
					<section>
						<h2>Section links</h2>
						<a className='section-link'>
							<i className="si-house si-default"/>
							View your Council Tax information
						</a>
						<a className='section-link'>
							<i className="si-wallet si-default"/>
							View your benefits information
						</a>
					</section>
				</article>
				<Aside/>
			</main>
		) 
	} 
}

export default Navigation