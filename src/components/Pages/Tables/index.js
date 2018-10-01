import React, { Component } from 'react'
import Aside from '../../Elements/Aside'

class Tables extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return (
			<main id="content">
				<article className="with-aside">
					<h1>Tables</h1>
					<p>Tables show tabular data in columns and rows.</p>
					<section>
						<h2 className="h3">My Account activity table</h2>
						<p>The My Account reports table shows detailed information about a user's recent activity.</p>
						<section className="data-table">
							<header>
								<div className="headings">
									<h2>Recent activity</h2>
									<p>Showing report activity from the last 30 days</p>
								</div>
								<div className="call-to-action hide-on-mobile">
									<button className="button-inverted" href="#">View all activity</button>
								</div>
							</header>
							<table>
								<thead className="hide-on-mobile">
									<tr>
										<th>Description</th>
										<th>Status</th>
										<th className="align-right">Last updated</th>
										<th></th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className="heading"><a href="#"></a>Street light located on Wellington Road South</td>
										<td><span className="status-information">Open</span></td>
										<td className="align-right align-left-mobile"><span className="hide-on-desktop hide-on-tablet">Last updated </span> Yesterday</td>
										<td className="hide-on-mobile"><i className="fa fa-angle-right"></i></td>
									</tr>
									<tr>
										<td className="heading"><a href="#"></a>Pot hole located on Hill Road</td>
										<td><span className="status-information">Open</span></td>
										<td className="align-right align-left-mobile"><span className="hide-on-desktop hide-on-tablet">Last updated</span> 2 days ago</td>
										<td className="hide-on-mobile"><i className="fa fa-angle-right"></i></td>
									</tr>
									<tr>
										<td className="heading"><a href="#"></a>Street light located on Great Bridge Street</td>
										<td><span className="status-default">On hold</span></td>
										<td className="align-right align-left-mobile"><span className="hide-on-desktop hide-on-tablet">Last updated</span> 3 March 2017</td>
										<td className="hide-on-mobile"><i className="fa fa-angle-right"></i></td>
									</tr>
									<tr>
										<td className="heading"><a href="#"></a>Pot hole located on River Road</td>
										<td><span className="status-success">Complete</span></td>
										<td className="align-right align-left-mobile"><span className="hide-on-desktop hide-on-tablet">Last updated </span> 1 March 2017</td>
										<td className="hide-on-mobile"><i className="fa fa-angle-right"></i></td>
									</tr>
									<tr>
										<td className="heading"><a href="#"></a>Pot hole located on Buckingham Road</td>
										<td><span className="status-error">Issue</span></td>
										<td className="align-right align-left-mobile"><span className="hide-on-desktop hide-on-tablet">Last updated </span> 1 March 2017</td>
										<td className="hide-on-mobile"><i className="fa fa-angle-right"></i></td>
									</tr>
									<tr className="hide-ondesktop hide-on-tablet">
										<td><button className="button-inverted" href="#">View all activity</button></td>
									</tr>
								</tbody>
							</table>
						</section>
					</section>
					<h1>Tables</h1>
					<p>Tables show when no data</p>
					<section>
						<h2 className="h3">My Account activity table</h2>
						<p>The My Account reports table shows detailed information about a user's recent activity.</p>
						<section className="data-table">
							<header>
								<div className="headings">
									<h2>Recent activity</h2>
									<p>Showing report activity from the last 30 days</p>
								</div>
							</header>
							<div className="no-activity">
								<p>You have no activity</p>
							</div>
						</section>
					</section>
					<section>
						<h2>Information table</h2>
						<section className="data-table-striped hide-on-mobile">
							<header>
								<div className="headings">
									<h2>Council tax band charges</h2>
								</div>
							</header>
							<table>
								<thead>
									<tr>
										<th>Council Tax evaluation band</th>
										<th>Range of values</th>
										<th className="align-right">Charge</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>A</td>
										<td>Up to £40,000</td>
										<td className="align-right">£1,162.67</td>
									</tr>
									<tr>
										<td>B</td>
										<td>£40,000 - £52,000</td>
										<td className="align-right">£1,356.45</td>
									</tr>
									<tr>
										<td>C</td>
										<td>£52,000 - £68,000</td>
										<td className="align-right">£1,550.23</td>
									</tr>
									<tr>
										<td>D</td>
										<td>£68,000 - £88,000</td>
										<td className="align-right">£1,744.02</td>
									</tr>
								</tbody>
							</table>
						</section>
						<section className="data-table-striped hide-on-tablet hide-on-desktop">
							<header>
								<div className="headings">
									<h2>Council tax band charges</h2>
								</div>
							</header>
							<section>
								<h4 className="sr-only">Council Tax band A charges</h4>
								<table>
									<tr>
										<td className="heading">Council Tax evaluation band</td>
										<td>A</td>
									</tr>
									<tr>
										<td className="heading">Range of values</td>
										<td>Up to £40,000</td>
									</tr>
									<tr>
										<td className="heading">Charge</td>
										<td>£1,162.67</td>
									</tr>
								</table>
							</section>
							<section>
								<h4 className="sr-only">Council Tax band B charges</h4>
								<table>
									<tr>
										<td className="heading">Council Tax evaluation band</td>
										<td>B</td>
									</tr>
									<tr>
										<td className="heading">Range of values</td>
										<td>£40,000 - £52,000</td>
									</tr>
									<tr>
										<td className="heading">Charge</td>
										<td>£1,356.45</td>
									</tr>
								</table>
							</section>
							<section>
								<h4 className="sr-only">Council Tax band C charges</h4>
								<table>
									<tr>
										<td className="heading">Council Tax evaluation band</td>
										<td>C</td>
									</tr>
									<tr>
										<td className="heading">Range of values</td>
										<td>£52,000 - £68,000</td>
									</tr>
									<tr>
										<td className="heading">Charge</td>
										<td>£1,550.23</td>
									</tr>
								</table>
							</section>
							<section>
								<h4 className="sr-only">Council Tax band D charges</h4>
								<table>
									<tr>
										<td className="heading">Council Tax evaluation band</td>
										<td>D</td>
									</tr>
									<tr>
										<td className="heading">Range of values</td>
										<td>£68,000 - £88,000</td>
									</tr>
									<tr>
										<td className="heading">Charge</td>
										<td>£1,744.02</td>
									</tr>
								</table>
							</section>
						</section>
						<h2>Costing table</h2>
						<section className="data-table-costing">
							<header>
								<div className="headings">
									<h2>Your items</h2>
								</div>
							</header>
							<table>
								<tbody>
									<tr>
										<td>
											Item A
											<a href="#">Remove</a>
										</td>
										<td className="align-right">£30</td>
									</tr>
									<tr>
										<td>
											Item B
											<a href="#">Remove</a>
										</td>
										<td className="align-right">£60</td>
									</tr>
									<tr>
										<td>
											Item C
											<a href="#">Remove</a>
										</td>
										<td className="align-right">£100</td>
									</tr>
									<tr>
										<td>
											Really long item name, first data-items are set to a fixed width of 80% of the table width.
											<a href="#">Remove</a>
										</td>
										<td className="align-right">£10</td>
									</tr>
								</tbody>
							</table>
							<footer>
								<strong>
									Total
									<span className="align-right">£200</span>
								</strong>
							</footer>
						</section>
						<h2>Appointments</h2>
						<section className="appointments">
							<header>
								<h2><strong>Previous appointments</strong></h2>
								<p>Showing all your previous appointments</p>
							</header>
							<table>
								<thead className="hide-on-mobile hide-on-tablet">
									<tr>
										<td><strong>Description</strong></td>
										<td className="align-right"><strong>Appointment date</strong></td>
										<td></td>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className="hide-on-desktop">
											<div>
												<div>
													<p><strong>Register a birth appointment</strong></p>
													<p>6 September 2018</p>
												</div>
											</div>
										</td>
										<td className="hide-on-mobile hide-on-tablet">Register a birth appointment</td>
										<td className="align-right hide-on-mobile hide-on-tablet">6 September 2018</td>
										<td className="hide-on-mobile hide-on-tablet"></td>
									</tr>
									<tr>
										<td className="hide-on-desktop">
											<div>
												<div>
													<p><strong>Register a birth appointment</strong></p>
													<p>6 September 2018</p>
												</div>
											</div>
										</td>
										<td className="hide-on-mobile hide-on-tablet">Register a birth appointment</td>
										<td className="align-right hide-on-mobile hide-on-tablet">6 September 2018</td>
										<td className="hide-on-mobile hide-on-tablet"></td>
									</tr>
								</tbody>
							</table>
							<footer>
								<div>
									<div className="items-count">
										Showing 1 - 10 of 27 appointments
									</div>
									<div className="page-numbers">
										<span>1</span>
										<form method="get" action="#">
											<input id="pager1PageIndex" name="pager1PageIndex" value="1" type="hidden"></input>
											<button type="submit">2</button>
										</form>
										<form action="#" method="get">
											<input id="pager1PageIndex" name="pager1PageIndex" value="2" type="hidden"></input>
											<button type="submit">3</button>
										</form>            
										<form action="#" method="get">
											<input id="pager1PageIndex" name="pager1PageIndex" value="3" type="hidden"></input>
											<button type="submit">Next</button>
										</form>
									</div>
								</div>
							</footer>
						</section>
						<h2>Appointments With Link</h2>
						<section className="appointments">
							<header>
								<h2><strong>Upcoming appointments</strong></h2>
								<p>Showing all your upcoming appointments</p>
							</header>
							<table>
								<thead className="hide-on-mobile hide-on-tablet">
									<tr>
										<td><strong>Description</strong></td>
										<td className="align-right"><strong>Appointment date</strong></td>
										<td></td>
									</tr>
								</thead>
								<tbody>
									<tr className="hover-hand">
										<td className="hide-on-desktop">
											<a href="#">
												<div>
													<div>
														<p><strong>Register a birth appointment</strong></p>
														<p>6 September 2018</p>
													</div>
													<i className="fa fa-angle-right" aria-hidden="true"></i>
												</div>
											</a>
										</td>
										<td className="hide-on-mobile hide-on-tablet"><a href="#"></a>Register a birth appointment</td>
										<td className="align-right hide-on-mobile hide-on-tablet">6 September 2018</td>
										<td className="hide-on-mobile hide-on-tablet"><i className="fa fa-angle-right"></i></td>
									</tr>
									<tr className="hover-hand">
										<td className="hide-on-desktop">
											<div>
												<div>
													<p><strong>Register a birth appointment</strong></p>
													<p>6 September 2018</p>
												</div>
												<i className="fa fa-angle-right" aria-hidden="true"></i>
											</div>
										</td>
										<td className="hide-on-mobile hide-on-tablet"><a href="#"></a>Register a birth appointment</td>
										<td className="align-right hide-on-mobile hide-on-tablet">6 September 2018</td>
										<td className="hide-on-mobile hide-on-tablet"><i className="fa fa-angle-right"></i></td>
									</tr>
								</tbody>
							</table>
							<footer>
								<div>
									<div className="items-count">
										Showing 1 - 10 of 27 appointments
									</div>
									<div className="page-numbers">
										<span>1</span>
										<form method="get" action="#">
											<input id="pager1PageIndex" name="pager1PageIndex" value="1" type="hidden"></input>
											<button type="submit">2</button>
										</form>
										<form action="#" method="get">
											<input id="pager1PageIndex" name="pager1PageIndex" value="2" type="hidden"></input>
											<button type="submit">3</button>
										</form>            
										<form action="#" method="get">
											<input id="pager1PageIndex" name="pager1PageIndex" value="3" type="hidden"></input>
											<button type="submit">Next</button>
										</form>
									</div>
								</div>
							</footer>
						</section>
						<h2>Previous Appointments</h2>
						<section className="appointments previous-appointments">
							<header>
								<h2><strong>Previous appointments</strong></h2>
								<p>Showing all your previous appointments</p>
							</header>
							<table>
								<thead className="hide-on-mobile hide-on-tablet">
									<tr>
										<td><strong>Description</strong></td>
										<td className="align-right"><strong>Appointment date</strong></td>
										<td></td>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className="hide-on-desktop">
											<div>
												<div>
													<p><strong>Register a birth appointment</strong></p>
													<p>6 September 2018</p>
												</div>
											</div>
										</td>
										<td className="hide-on-mobile hide-on-tablet">Register a birth appointment</td>
										<td className="align-right hide-on-mobile hide-on-tablet">6 September 2018</td>
										<td className="hide-on-mobile hide-on-tablet"></td>
									</tr>
									<tr>
										<td className="hide-on-desktop">
											<div>
												<div>
													<p><strong>Register a birth appointment</strong></p>
													<p>6 September 2018</p>
												</div>
											</div>
										</td>
										<td className="hide-on-mobile hide-on-tablet">Register a birth appointment</td>
										<td className="align-right hide-on-mobile hide-on-tablet">6 September 2018</td>
										<td className="hide-on-mobile hide-on-tablet"></td>
									</tr>
								</tbody>
							</table>
							<footer>
								<div>
									<div className="items-count">
										Showing 1 - 10 of 27 appointments
									</div>
									<div className="page-numbers">
										<span>1</span>
										<form method="get" action="#">
											<input id="pager1PageIndex" name="pager1PageIndex" value="1" type="hidden"></input>
											<button type="submit">2</button>
										</form>
										<form action="#" method="get">
											<input id="pager1PageIndex" name="pager1PageIndex" value="2" type="hidden"></input>
											<button type="submit">3</button>
										</form>            
										<form action="#" method="get">
											<input id="pager1PageIndex" name="pager1PageIndex" value="3" type="hidden"></input>
											<button type="submit">Next</button>
										</form>
									</div>
								</div>
							</footer>
						</section>
					</section>
				</article>
				<Aside/>
			</main>
		) 
	} 
}

export default Tables