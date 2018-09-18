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
									<div className="pagination-chevron">
										<i className="fa fa-angle-left fa-3x" aria-hidden="true"></i>
									</div>
									<div>
										<h4>Previous page</h4>
										<p>Secondary schools</p>
									</div>
								</a>
							</div>
							<div className="pagination-next">
								<a href="#">
									<div>
										<h4>Next page</h4>
										<p>Secondary schools</p>
									</div>
									<div className="pagination-chevron">
										<i className="fa fa-angle-right fa-3x" aria-hidden="true"></i>
									</div>
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
										<h4>Next page</h4>
										<p>Secondary schools</p>
									</div>
									<div className="pagination-chevron">
										<i className="fa fa-angle-right fa-3x" aria-hidden="true"></i>
									</div>
								</a>
							</div>
						</div>
					</section>
					<section>
						<h2>Pagination - Left side only</h2>
						<div className="pagination-container">
							<div className="pagination-previous">
								<a href="#">
									<div className="pagination-chevron">
										<i className="fa fa-angle-left fa-3x" aria-hidden="true"></i>
									</div>
									<div>
										<h4>Previous page</h4>
										<p>Secondary schools</p>
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
				</article>
				<Aside/>
			</main>
		) 
	} 
}

export default Navigation